"use strict";
var JSGallery = /** @class */ (function () {
    function JSGallery(imageArray) {
        this.imageArray = imageArray;
    }
    JSGallery.prototype.create = function (selector) {
        var _this = this;
        document.addEventListener("DOMContentLoaded", function () {
            _this.initGallery(selector);
            // alert("This is loaded")
        });
    };
    JSGallery.prototype.initGallery = function (selector) {
        var _this = this;
        this.jsGalleryNode = document.querySelector(selector);
        // alert("inited")
        if (this.jsGalleryNode == null) {
            alert("jsGallery Error : Cannot Find Element with selector " + selector);
        }
        else {
            // Create the Main Container div for full view
            var mainImageContainer = document.createElement("div");
            mainImageContainer.setAttribute("id", "jsg-main-image-container");
            console.log(mainImageContainer);
            // Creating img tag to hold the main image
            this.mainImageElement = document.createElement("img");
            this.mainImageElement.src = this.imageArray[0];
            // Add main image img to main image div
            mainImageContainer.appendChild(this.mainImageElement);
            var imageListContainer_1 = document.createElement("div");
            imageListContainer_1.setAttribute("id", "jsg-image-list");
            // Created the main div,  now i need to populate the all the images of the image
            this.imageArray.forEach(function (imgLink, index) {
                var singleImageList = document.createElement("img");
                singleImageList.src = imgLink;
                _this.addChangeImageEvent(singleImageList);
                singleImageList.setAttribute("id", "img-" + index);
                imageListContainer_1.appendChild(singleImageList);
            });
            console.log("dfsdsf");
            this.jsGalleryNode.appendChild(mainImageContainer);
            this.jsGalleryNode.appendChild(imageListContainer_1);
            console.log(this.jsGalleryNode);
        }
    };
    JSGallery.prototype.addChangeImageEvent = function (imageElement) {
        var _this = this;
        imageElement.addEventListener("click", function () {
            // alert("sdfsdf")
            _this.mainImageElement.src = imageElement.src;
        });
    };
    return JSGallery;
}());
