const servers = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
};

let pc = new RTCPeerConnection(servers);

startVideo.onclick = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({video:true,audio:true});
  localVideo.srcObject = stream;

  stream.getTracks().forEach(track => pc.addTrack(track, stream));

  pc.ontrack = e => remoteVideo.srcObject = e.streams[0];
};
