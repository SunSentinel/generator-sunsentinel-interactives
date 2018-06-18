export default function loadComments() {
  var js, fjs = document.getElementsByTagName('script')[0];

  if (document.getElementById('facebook-jssdk')) return;

  js = document.createElement('script');
  js.id = 'facebook-jssdk';
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
};

export { loadComments };