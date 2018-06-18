export default function doShare() {
  (function(a, b) {
    a(function() {
      a('.shareline i').click(function() {
        var c = a(this);
        var d = c.parents('.shareline');
        var share_provider = c.attr('data-share'),
          share_url, share_title, share_description, share_image, share_dialog;
        share_url = d.attr('data-url') || a('meta[property="og:url"]').attr('content') || window.location.protocol + "//" + window.location.host + window.location.pathname;
        share_title = d.attr('data-title') || a('meta[property="og:title"]').attr('content') || document.title;
        share_description = d.attr('data-description') || a('meta[property="og:description"]').attr('content') || "";
        share_image = d.attr('data-image') || a('meta[property="og:image"]').attr('content') || "";
        share_dialog = d.attr('data-dialog-type') || "share";
        if (share_provider === 'twitter') {
          share_title = d.attr('data-title') || a('meta[name="twitter:description"]').attr('content') || "";
        }
        if (share_provider === 'email') b.socialize.showShareUI({
          userAction: new b.socialize.UserAction({
            title: share_title
          }),
          hideSidebar: true,
          initialView: 'email',
          emailBody: '$userMsg$<br/><br/><a href="' + share_url + '" target="_blank">' + share_title + "</a><br/><br/>This message was sent to you by $sender$",
          useHTML: true,
          title: share_title
        });
        else b.socialize.postBookmark({
          url: share_url,
          provider: share_provider,
          title: share_title,
          thumbnailURL: share_image,
          description: share_description,
          facebookDialogType: share_dialog
        });
      });
    });
  })(jQuery, gigya);
};

export { doShare };