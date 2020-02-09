import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
  setHeadComponents([
    <script dangerouslySetInnerHTML={{
      __html: `
        window.prismic = {
        endpoint: 'https://bh-portfolio-site.cdn.prismic.io/api/v2'
        }`
    }} />,
    <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js?new=true"></script>
  ]);
}