define([
    'Magento_PageBuilder/js/content-type/preview',
], function (PreviewBase) {
    'use strict';
    var $super;

    function Preview(parent, config, stageId) {
        PreviewBase.call(this, parent, config, stageId);
    }

    Preview.prototype = Object.create(PreviewBase.prototype);
    $super = PreviewBase.prototype;

    Preview.prototype.setLink = function setLink(src) {
        // Setted Link
        var setLink = src;

        // subString array
        var substringArray = [""];

        // Checking link
        var linkSpotifyRegExp = new RegExp("[s][p][o][t][i][f][y]");

        // Checking Embed
        var linkEmbed = new RegExp("[e][m][b][e][d]");

        /**
         * Call to the playlist link
         * @param src
         */
        if (!linkEmbed.test(src)) {
            if (linkSpotifyRegExp.test(src)) {
                // Separator
                var separator = ".com/"
                substringArray = src.split(separator);
                setLink = substringArray[0]+separator+"embed/"+substringArray[1];
                return setLink;
            }
        }        return src;
    };
    return Preview;
});
