interface IHtmlProps {
  favicon: String;
  style: String;
  containerId: String;
}

export default ({ favicon, style, containerId }: IHtmlProps) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="${favicon}" rel="icon" type="image/x-icon" />
  <title>React Example</title>
  ${style ? `<link rel="stylesheet" href="${style}" />` : ''}
</head>
<body>
<div id="${containerId}">`;