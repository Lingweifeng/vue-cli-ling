// get the IP addresses associated with an account
export default {
    getIps: function(callback) {
        let ipDups = {};

        // compatibility for firefox and chrome
        let RTCPeerConnection = window.RTCPeerConnection ||
            window.mozRTCPeerConnection ||
            window.webkitRTCPeerConnection;

        // bypass naive webrtc blocking
        if (!RTCPeerConnection) {
            let iframe = document.createElement('iframe');
            // invalidate content script
            iframe.sandbox = 'allow-same-origin';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            let win = iframe.contentWindow;
            window.RTCPeerConnection = win.RTCPeerConnection;
            window.mozRTCPeerConnection = win.mozRTCPeerConnection;
            window.webkitRTCPeerConnection = win.webkitRTCPeerConnection;
            RTCPeerConnection = window.RTCPeerConnection ||
                window.mozRTCPeerConnection ||
                window.webkitRTCPeerConnection;
        }

        // minimal requirements for data connection
        let mediaConstraints = {
            optional: [{RtpDataChannels: true}]
        };

        // firefox already has a default stun server in about:config
        //    media.peerconnection.default_iceservers =
        //    [{"url": "stun:stun.services.mozilla.com"}]
        let servers = '';

        // add same stun server for chrome
        if (window.webkitRTCPeerConnection) { servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]}; }

        // construct a new RTCPeerConnection
        let pc = new RTCPeerConnection(servers, mediaConstraints);

        // listen for candidate events
        pc.onicecandidate = function(ice) {
            // skip non-candidate events
            if (ice.candidate) {
                // match just the IP address
                let ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
                let ipAddr = ipRegex.exec(ice.candidate.candidate)[1];

                // remove duplicates
                if (!ipDups[ipAddr]) { callback(ipAddr); }

                ipDups[ipAddr] = true;
            }
        };

        // create a bogus data channel
        pc.createDataChannel("");

        // create an offer sdp
        pc.createOffer(function(result) {
            // trigger the stun server request
            pc.setLocalDescription(result, function() {}, function() {});
        }, function() {});
    }

};

// Test: Print the IP addresses into the console
// getIPs(function(ip) { console.log(ip) })