class JSGallery {

    private imageArray: string[];

    private jsGalleryNode: null | HTMLDivElement;

    private mainImageElement:HTMLImageElement;

    constructor(imageArray: string[]) {
        this.imageArray = imageArray;
    }

    create(selector: string) {

        document.addEventListener("DOMContentLoaded", () => {
            this.initGallery(selector);
            // alert("This is loaded")
        })

    }

    private initGallery(selector: string) {


        this.jsGalleryNode = document.querySelector(selector);
        // alert("inited")
        if (this.jsGalleryNode == null) {
            alert(`jsGallery Error : Cannot Find Element with selector ${selector}`)
        } else {
            // Create the Main Container div for full view
            let mainImageContainer: HTMLDivElement = document.createElement("div");
            mainImageContainer.setAttribute("id", "jsg-main-image-container");
            console.log(mainImageContainer);
            // Creating img tag to hold the main image
            this.mainImageElement = document.createElement("img");
            this.mainImageElement.src = this.imageArray[0];

            // Add main image img to main image div
            mainImageContainer.appendChild(this.mainImageElement);


            let imageListContainer: HTMLDivElement = document.createElement("div");
            imageListContainer.setAttribute("id", "jsg-image-list")

            // Created the main div,  now i need to populate the all the images of the image

            this.imageArray.forEach((imgLink: string, index: number) => {

                let singleImageList: HTMLImageElement = document.createElement("img");
                singleImageList.src = imgLink;
                this.addChangeImageEvent(singleImageList)
                singleImageList.setAttribute("id", `img-${index}`);
                imageListContainer.appendChild(singleImageList);
            })
            console.log("dfsdsf")
            this.jsGalleryNode.appendChild(mainImageContainer)
            this.jsGalleryNode.appendChild(imageListContainer)
            console.log(this.jsGalleryNode)

        }


    }

    private addChangeImageEvent(imageElement:HTMLImageElement){
        imageElement.addEventListener("click",()=>{
            // alert("sdfsdf")
            this.mainImageElement.src = imageElement.src;
        })
    }

}