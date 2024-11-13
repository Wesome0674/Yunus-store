import { Suspense } from "react"

import { HiOutlineShoppingBag } from "react-icons/hi2"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto duration-200 bg-brown">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full small:hidden">
              <SideMenu regions={regions} />
            </div>
            <div className="flex items-center h-full">
              <LocalizedClientLink
                href="/"
                className="small:block hidden text-2xl text-black hover:text-ui-fg-base"
                data-testid="nav-store-link"
              >
                CST
              </LocalizedClientLink>
            </div>
          </div>

          <div className="flex gap-5 items-center h-full">
            <LocalizedClientLink
              href="/"
              className="small:hidden block text-2xl text-black hover:text-ui-fg-base"
              data-testid="nav-store-link"
            >
              CST
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="small:block hidden text-base text-black hover:text-ui-fg-base"
              data-testid="nav-store-link"
            >
              Explore
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="small:block hidden text-base text-black hover:text-ui-fg-base"
              data-testid="nav-store-link"
            >
              Bedroom
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="small:block hidden text-base text-black hover:text-ui-fg-base"
              data-testid="nav-store-link"
            >
              Sleepwear
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="small:block hidden text-base text-black hover:text-ui-fg-base"
              data-testid="nav-store-link"
            >
              Blog
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="small:block hidden text-base text-black hover:text-ui-fg-base"
              data-testid="nav-store-link"
            >
              About Us
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="text-base text-black hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Se connecter
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-base text-black hover:text-ui-fg-base flex items-center gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Panier
                  <HiOutlineShoppingBag size={20} />
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
