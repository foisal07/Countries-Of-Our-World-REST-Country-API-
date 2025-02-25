import View from "./View.js";

class NavView extends View {
  _navContainer = document.querySelector(".nav");
  _whereAmIBtn = document.querySelector(".nav__whereami_btn");
  _displayContainer = document.querySelector(".display-countries");

  // Handler WhereAmI
  addHandlerWhereAmI(handler) {
    this._navContainer.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        const whereAmI = e.target.closest(".nav__whereami_btn");
        if (!whereAmI) return;

        // hide countries card
        this._hideCountryCardContainer();

        // clear detail page
        this._clearDetailPageContainer();

        // hide pagination container
        this._hidePaginationContainer();

        //render tracked country
        handler();
      }.bind(this)
    );
  }

  // Handler region
  addHandlerFilter(handler) {
    this._navContainer.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        const filter = e.target.closest(".filterBy");
        if (!filter) return;
        const filterBy = filter.getAttribute("data-filterBy").toLowerCase();

        // show countrycard container
        this._showCountryCardContainer();

        // clear country cards
        this._clearCountryCardContainer();

        // clear detail page
        this._clearDetailPageContainer();

        // hide pagination container
        this._hidePaginationContainer();

        //render filtered countries
        handler(filterBy);
      }.bind(this)
    );
  }
}

export default new NavView();
