import React from "react";

const SortResults = () => {
    return (
        <>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categories
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Arts & Culture</a>
                    <a class="dropdown-item" href="#">Bars</a>
                    <a class="dropdown-item" href="#">Cinema</a>
                    <a class="dropdown-item" href="#">Coffee & Tea</a>
                    <a class="dropdown-item" href="#">Music</a>
                    <a class="dropdown-item" href="#">Landmarks</a>
                    <a class="dropdown-item" href="#">Restaurants</a>
                    <a class="dropdown-item" href="#">Shopping</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Rating
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">{`< 100`}</a>
                    <a class="dropdown-item" href="#">{`< 250`}</a>
                    <a class="dropdown-item" href="#">{`> 500`}</a>
                </div>
            </div>
        </>
    )
}

export default SortResults