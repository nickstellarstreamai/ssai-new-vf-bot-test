window.addEventListener('load', function() {
  const config = {
    verify: { projectID: '655bdd29292a21c07e66389a' },
    url: 'https://general-runtime.voiceflow.com',
    versionID: 'production',
    element: document.getElementById('voiceflow')
  };
  window.voiceflow.Widget.init(config);
});
