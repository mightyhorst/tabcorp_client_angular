'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">isentia-client-angular documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-28f923b5e2055ffcc173838ddc0ef5a5"' : 'data-target="#xs-components-links-module-AppModule-28f923b5e2055ffcc173838ddc0ef5a5"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-28f923b5e2055ffcc173838ddc0ef5a5"' : 'id="xs-components-links-module-AppModule-28f923b5e2055ffcc173838ddc0ef5a5"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContainerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FlickrDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FlickrDetailsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FlickrFavouritesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FlickrFavouritesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FlickrListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FlickrListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FlickrSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FlickrSearchComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FlickrTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FlickrTileComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LayoutHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutHeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SidebarItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarItemComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-28f923b5e2055ffcc173838ddc0ef5a5"' : 'data-target="#xs-injectables-links-module-AppModule-28f923b5e2055ffcc173838ddc0ef5a5"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-28f923b5e2055ffcc173838ddc0ef5a5"' : 'id="xs-injectables-links-module-AppModule-28f923b5e2055ffcc173838ddc0ef5a5"' }>
                                        <li class="link">
                                            <a href="injectables/FavouritesFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FavouritesFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FlickrApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FlickrApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PhotoCache.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>PhotoCache</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AuthComponent.html" data-type="entity-link">AuthComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmEmailComponent.html" data-type="entity-link">ConfirmEmailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ForgotPasswordComponent.html" data-type="entity-link">ForgotPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link">LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileComponent.html" data-type="entity-link">ProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RegisterComponent.html" data-type="entity-link">RegisterComponent</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/FlickrPhoto.html" data-type="entity-link">FlickrPhoto</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/IFlickrApiContract.html" data-type="entity-link">IFlickrApiContract</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IFlickrApiItemContract.html" data-type="entity-link">IFlickrApiItemContract</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IFlickrFeedContract.html" data-type="entity-link">IFlickrFeedContract</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PhotoHashTable.html" data-type="entity-link">PhotoHashTable</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PhotoHashTable-1.html" data-type="entity-link">PhotoHashTable</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SidebarItem.html" data-type="entity-link">SidebarItem</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
