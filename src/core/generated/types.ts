
// Representation of a Voucher
interface VoucherWsDTO {

    /**
     * The identifier of the Voucher. This is the first part of voucher code which holds first 3 letters, like: 123
     * 
     **/
    code: string
    ,

    /**
     * Voucher code, is the holder for keeping specific occasional voucher related to business usage. It can be generated and looks like: 123-H8BC-Y3D5-34AL
     * 
     **/
    voucherCode: string
    ,

    /**
     * Name of the voucher
     * 
     **/
    name: string
    ,

    /**
     * Description of the voucher
     * 
     **/
    description: string
    ,

    /**
     * Value of the voucher. Example of such value is: 15.0d
     * 
     **/
    value: number
    ,

    /**
     * Formatted value of the voucher
     * 
     **/
    valueFormatted: string
    ,

    /**
     * The value of the voucher to display. Example: 15.0%
     * 
     **/
    valueString: string
    ,

    /**
     * Specifies if the order this voucher is applied to is shipped for free (true) or not (false). Defaults to false.
     * 
     **/
    freeShipping: Boolean
    ,

    /**
     * Currency of the voucher
     * 
     **/
    currency: CurrencyWsDTO
    ,

    /**
     * Applied value when using this voucher
     * 
     **/
    appliedValue: PriceWsDTO

}


// Representation of a Voucher List
interface VoucherListWsDTO {

    /**
     * List of vouchers
     * 
     **/
    vouchers: VoucherWsDTO[]

}


// Representation of a Currency
interface CurrencyWsDTO {

    /**
     * Code of the currency in iso format
     * 
     **/
    isocode: string
    ,

    /**
     * Name of the currency
     * 
     **/
    name: string
    ,

    /**
     * Boolean flag whether currency is active
     * 
     **/
    active: Boolean
    ,

    /**
     * Symbol of the currency
     * 
     **/
    symbol: string

}


// Representation of a Currency List
interface CurrencyListWsDTO {

    /**
     * List of currencies
     * 
     **/
    currencies: CurrencyWsDTO[]

}


// Representation of a Price
interface PriceWsDTO {

    /**
     * Currency iso format
     * 
     **/
    currencyIso: string
    ,

    /**
     * Value of price in BigDecimal format
     * 
     **/
    value: number
    ,

    /**
     * Type of the price
     * 
     **/
    priceType: PriceWsDTOType
    ,

    /**
     * Value of price formatted
     * 
     **/
    formattedValue: string
    ,

    /**
     * Minimum quantity of the price value
     * 
     **/
    minQuantity: number
    ,

    /**
     * Maximum quantity of the price value
     * 
     **/
    maxQuantity: number

}


// Representation of a Unit
interface SAPUnitWsDTO {

    /**
     * Code of the unit
     * 
     **/
    code: string
    ,

    /**
     * Name of the unit
     * 
     **/
    name: string
    ,

    /**
     * Code of the unit is used to check availability, which can be retrieved either from 'code' without any integration, from 'sapCode' with SAP OMSA integration, or potentially from another source through custom integration with a stock service.
     * 
     **/
    availabilityCode: string
    ,

    /**
     * Code of the SAP unit
     * 
     **/
    sapCode: string

}


// Representation of a Price Range
interface PriceRangeWsDTO {

    /**
     * Maximum value of the Price Range
     * 
     **/
    maxPrice: PriceWsDTO
    ,

    /**
     * Minium value of the Price Range
     * 
     **/
    minPrice: PriceWsDTO

}


// Representation of a Promotion
interface PromotionWsDTO {

    /**
     * Code of the promotion
     * 
     **/
    code: string
    ,

    /**
     * Promotion title
     * 
     **/
    title: string
    ,

    /**
     * Type of the promotion
     * 
     **/
    promotionType: string
    ,

    /**
     * The initial date of the promotion
     * 
     **/
    startDate: Date
    ,

    /**
     * Last date of validity of the promotion
     * 
     **/
    endDate: Date
    ,

    /**
     * Description of the promotion
     * 
     **/
    description: string
    ,

    /**
     * Message about promotion which is displayed when planning potential promotion. This field has higher priority over promotion description
     * 
     **/
    couldFireMessages: String[]
    ,

    /**
     * Message fired while the promotion is active. This is info how much you will get when applying the promotion
     * 
     **/
    firedMessages: String[]
    ,

    /**
     * Image banner of the promotion
     * 
     **/
    productBanner: ImageWsDTO
    ,

    /**
     * Boolean flag if promotion is enabled
     * 
     **/
    enabled: Boolean
    ,

    /**
     * Priority index as numeric value of the promotion. Higher number means higher priority
     * 
     **/
    priority: number
    ,

    /**
     * Group of the promotion
     * 
     **/
    promotionGroup: string
    ,

    /**
     * List of promotion restrictions
     * 
     **/
    restrictions: PromotionRestrictionWsDTO[]

}


// Representation of a Promotion list
interface PromotionListWsDTO {

    /**
     * List of promotions
     * 
     **/
    promotions: PromotionWsDTO[]

}


// Representation of an Image
interface ImageWsDTO {

    /**
     * Type of the image, can be PRIMARY or GALLERY
     * 
     **/
    imageType: ImageWsDTOType
    ,

    /**
     * Format of the image, can be zoom, product, thumbnail, store, cartIcon, etc.
     * 
     **/
    format: string
    ,

    /**
     * URL address of the image
     * 
     **/
    url: string
    ,

    /**
     * Tooltip content which is visible while image mouse hovering
     * 
     **/
    altText: string
    ,

    /**
     * Index of the image while displayed in gallery
     * 
     **/
    galleryIndex: number

}


// Representation of a Promotion Restriction
interface PromotionRestrictionWsDTO {

    /**
     * Type of the promotion restriction
     * 
     **/
    restrictionType: string
    ,

    /**
     * Description of the promotion restriction
     * 
     **/
    description: string

}


// Representation of an Abstract Catalog Item
interface AbstractCatalogItemWsDTO {

    /**
     * Identifier of abstract catalog item
     * 
     **/
    id: string
    ,

    /**
     * Date of last modification
     * 
     **/
    lastModified: Date
    ,

    /**
     * Name of abstract catalog item
     * 
     **/
    name: string
    ,

    /**
     * Url address of abstract catalog item
     * 
     **/
    url: string

}


// Representation of a Catalog
interface CatalogWsDTO {

    /**
     * List of versions of catalog
     * 
     **/
    catalogVersions: CatalogVersionWsDTO[]

}


// Representation of a Catalog List
interface CatalogListWsDTO {

    /**
     * List of catalog items
     * 
     **/
    catalogs: CatalogWsDTO[]

}


// Representation of a Catalog Version
interface CatalogVersionWsDTO {

    /**
     * List of category hierarchies
     * 
     **/
    categories: CategoryHierarchyWsDTO[]

}


// Representation of a Category Hierarchy
interface CategoryHierarchyWsDTO {

    /**
     * List of subcategory hierarchies
     * 
     **/
    subcategories: CategoryHierarchyWsDTO[]

}


// Representation of a Product
interface ProductWsDTO {

    /**
     * Code of the product
     * 
     **/
    code: string
    ,

    /**
     * Name of the product
     * 
     **/
    name: string
    ,

    /**
     * Url address of the product
     * 
     **/
    url: string
    ,

    /**
     * Description of the product
     * 
     **/
    description: string
    ,

    /**
     * Flag defining if product is purchasable
     * 
     **/
    purchasable: Boolean
    ,

    /**
     * Stock value of the product
     * 
     **/
    stock: StockWsDTO
    ,

    /**
     * List of future stocks
     * 
     **/
    futureStocks: FutureStockWsDTO[]
    ,

    /**
     * Flag defining if product is available for pickup
     * 
     **/
    availableForPickup: Boolean
    ,

    /**
     * Rating number of average value
     * 
     **/
    averageRating: number
    ,

    /**
     * Number of reviews associated with the product
     * 
     **/
    numberOfReviews: number
    ,

    /**
     * Product summary
     * 
     **/
    summary: string
    ,

    /**
     * Data of product manufacturer
     * 
     **/
    manufacturer: string
    ,

    /**
     * Variant type of the product
     * 
     **/
    variantType: string
    ,

    /**
     * Price of the product
     * 
     **/
    price: PriceWsDTO
    ,

    /**
     * Unit of the product
     * 
     **/
    sapUnit: SAPUnitWsDTO
    ,

    /**
     * Information about base product
     * 
     **/
    baseProduct: string
    ,

    /**
     * List of images linked to product
     * 
     **/
    images: ImageWsDTO[]
    ,

    /**
     * List of categories product belongs to
     * 
     **/
    categories: CategoryWsDTO[]
    ,

    /**
     * List of reviews associated with the product
     * 
     **/
    reviews: ReviewWsDTO[]
    ,

    /**
     * List of classifications related to the product
     * 
     **/
    classifications: ClassificationWsDTO[]
    ,

    /**
     * List of potential promotions related to the product
     * 
     **/
    potentialPromotions: PromotionWsDTO[]
    ,

    /**
     * List of variant options related to the product
     * 
     **/
    variantOptions: VariantOptionWsDTO[]
    ,

    /**
     * List of base options related to the product
     * 
     **/
    baseOptions: BaseOptionWsDTO[]
    ,

    /**
     * Flag stating if volume price should be displayed
     * 
     **/
    volumePricesFlag: Boolean
    ,

    /**
     * List of volume prices
     * 
     **/
    volumePrices: PriceWsDTO[]
    ,

    /**
     * List of product references
     * 
     **/
    productReferences: ProductReferenceWsDTO[]
    ,

    /**
     * List of variant matrixes associated with the product
     * 
     **/
    variantMatrix: VariantMatrixElementWsDTO[]
    ,

    /**
     * Price range assigned to the product
     * 
     **/
    priceRange: PriceRangeWsDTO
    ,

    /**
     * Flag stating if product is multidimensional
     * 
     **/
    multidimensional: Boolean
    ,

    /**
     * Configurator type related to the product
     * 
     **/
    configuratorType: string
    ,

    /**
     * Flag stating if product is configurable
     * 
     **/
    configurable: Boolean
    ,

    /**
     * Tags associated with the product
     * 
     **/
    tags: String[]
    ,

    /**
     * Flag specifies whether product can be added to cart. When addToCartDisabled=true, the product is not allowed to be added into cart and the reason is explained through sapAddToCartDisabledMessage; when addToCartDisabled=false, the product is allowed to be added into cart.
     * 
     **/
    sapAddToCartDisabled: Boolean
    ,

    /**
     * Message shows why product can not be added to cart.
     * 
     **/
    sapAddToCartDisabledMessage: string

}


// Representation of a Stock
interface StockWsDTO {

    /**
     * Status of stock level
     * 
     **/
    stockLevelStatus: string
    ,

    /**
     * Stock level expressed as number
     * 
     **/
    stockLevel: number
    ,

    /**
     * Indicate whether Stock level value is rounded
     * 
     **/
    isValueRounded: Boolean

}


// Representation of availability for a list of products.
interface SapAvailabilityWsDTO {

    /**
     * List of product availability.
     * 
     **/
    availabilityItems: SapProductAvailabilityWsDTO[]

}


// Representation of availability for a product.
interface SapProductAvailabilityWsDTO {

    /**
     * Product identifier.
     * 
     **/
    productCode: string
    ,

    /**
     * List of unit availability.
     * 
     **/
    unitAvailabilities: SapUnitAvailabilityWsDTO[]

}


// Representation of availability in a particular unit.
interface SapUnitAvailabilityWsDTO {

    /**
     * Available quantity.
     * 
     **/
    quantity: number
    ,

    /**
     * Status of availability. Possible values can be IN_STOCK, OUT_OF_STOCK, LOW_STOCK.
     * 
     **/
    status: string
    ,

    /**
     * Code of the unit of measure.
     * 
     **/
    unit: string

}


// Representation of a Future Stock
interface FutureStockWsDTO {

    /**
     * Stock information of future stock
     * 
     **/
    stock: StockWsDTO
    ,

    /**
     * Date of future stock
     * 
     **/
    date: Date
    ,

    /**
     * Date of future stock expressed in text value
     * 
     **/
    formattedDate: string

}


// Representation of a Product Future Stocks
interface ProductFutureStocksWsDTO {

    /**
     * Product identifier
     * 
     **/
    productCode: string
    ,

    /**
     * List of future stocks
     * 
     **/
    futureStocks: FutureStockWsDTO[]

}


// Representation of a Product Future Stocks List
interface ProductFutureStocksListWsDTO {

    /**
     * List of product future stocks
     * 
     **/
    productFutureStocks: ProductFutureStocksWsDTO[]

}


// Representation of a Category
interface CategoryWsDTO {

    /**
     * Code of the category
     * 
     **/
    code: string
    ,

    /**
     * Name of the category
     * 
     **/
    name: string
    ,

    /**
     * URL of the category
     * 
     **/
    url: string
    ,

    /**
     * Category image
     * 
     **/
    image: ImageWsDTO

}


// Representation of a Review
interface ReviewWsDTO {

    /**
     * Identifier of review
     * 
     **/
    id: string
    ,

    /**
     * Review headline
     * 
     **/
    headline: string
    ,

    /**
     * Review comment
     * 
     **/
    comment: string
    ,

    /**
     * Review rating value
     * 
     **/
    rating: number
    ,

    /**
     * Date of the review
     * 
     **/
    date: Date
    ,

    /**
     * Alias name for the review
     * 
     **/
    alias: string
    ,

    /**
     * Person related to the review
     * 
     **/
    principal: UserWsDTO

}


// Representation of a Review List
interface ReviewListWsDTO {

    /**
     * List of reviews
     * 
     **/
    reviews: ReviewWsDTO[]

}


// Representation of a Classification
interface ClassificationWsDTO {

    /**
     * Code of the classification
     * 
     **/
    code: string
    ,

    /**
     * Name of the classification
     * 
     **/
    name: string
    ,

    /**
     * List of features for given classification
     * 
     **/
    features: FeatureWsDTO[]

}


// Representation of a Feature
interface FeatureWsDTO {

    /**
     * Code of the feature
     * 
     **/
    code: string
    ,

    /**
     * Name of the feature
     * 
     **/
    name: string
    ,

    /**
     * Description of the feature
     * 
     **/
    description: string
    ,

    /**
     * Type of the feature
     * 
     **/
    type: string
    ,

    /**
     * Range number of the feature
     * 
     **/
    range: Boolean
    ,

    /**
     * Flag defining it feature is comparable
     * 
     **/
    comparable: Boolean
    ,

    /**
     * Feature unit
     * 
     **/
    featureUnit: FeatureUnitWsDTO
    ,

    /**
     * List of feature values
     * 
     **/
    featureValues: FeatureValueWsDTO[]

}


// Representation of a Feature Unit
interface FeatureUnitWsDTO {

    /**
     * Symbol of the feature unit
     * 
     **/
    symbol: string
    ,

    /**
     * Name of the feature unit
     * 
     **/
    name: string
    ,

    /**
     * Type of the feature unit
     * 
     **/
    unitType: string

}


// Representation of a Feature Value
interface FeatureValueWsDTO {

    /**
     * Value of the feature
     * 
     **/
    value: string

}


// Representation of a Variant Option
interface VariantOptionWsDTO {

    /**
     * Code of the variant option
     * 
     **/
    code: string
    ,

    /**
     * Stock value of the variant option
     * 
     **/
    stock: StockWsDTO
    ,

    /**
     * Url address of the variant option
     * 
     **/
    url: string
    ,

    /**
     * Price data information of the variant option
     * 
     **/
    priceData: PriceWsDTO
    ,

    /**
     * List of variant option qualifiers
     * 
     **/
    variantOptionQualifiers: VariantOptionQualifierWsDTO[]

}


// Representation of a Variant Option Qualifier
interface VariantOptionQualifierWsDTO {

    /**
     * Qualifier
     * 
     **/
    qualifier: string
    ,

    /**
     * Name of variant option qualifier
     * 
     **/
    name: string
    ,

    /**
     * Value of variant option qualifier
     * 
     **/
    value: string
    ,

    /**
     * Image associated with variant option qualifier
     * 
     **/
    image: ImageWsDTO

}


// Representation of a Configuration Info
interface ConfigurationInfoWsDTO {

    /**
     * Type of configuration info
     * 
     **/
    configuratorType: string
    ,

    /**
     * Status of configuration info
     * 
     **/
    status: string
    ,

    /**
     * Label of configuration info
     * 
     **/
    configurationLabel: string
    ,

    /**
     * Value of configuration info
     * 
     **/
    configurationValue: string

}


// Representation of a status summary, an aggregated view on issues for a specific status or severity. These issues are attached to configurations of products or order entries
interface StatusSummaryWsDTO {

    /**
     * Status or severity indicator, can be one of ERROR, WARNING, INFO or SUCCESS
     * 
     **/
    status: string
    ,

    /**
     * Number of issues per status
     * 
     **/
    numberOfIssues: number

}


// Representation of a Configuration Info List
interface ConfigurationInfoListWsDTO {

    /**
     * List of configuration info
     * 
     **/
    configurationInfos: ConfigurationInfoWsDTO[]

}


// Representation of a Base Option
interface BaseOptionWsDTO {

    /**
     * Variant type of base option
     * 
     **/
    variantType: string
    ,

    /**
     * List of all variant options
     * 
     **/
    options: VariantOptionWsDTO[]
    ,

    /**
     * Variant option selected
     * 
     **/
    selected: VariantOptionWsDTO

}


// Representation of a Product Reference
interface ProductReferenceWsDTO {

    /**
     * Flag stating if product reference is preselected
     * 
     **/
    preselected: Boolean

}


// Representation of a Product Reference List
interface ProductReferenceListWsDTO {

    /**
     * List of product references
     * 
     **/
    references: ProductReferenceWsDTO[]

}


// Representation of a Reference
interface ReferenceWsDTO {

    /**
     * Reference type
     * 
     **/
    referenceType: string
    ,

    /**
     * Reference description
     * 
     **/
    description: string
    ,

    /**
     * Reference quantity
     * 
     **/
    quantity: number
    ,

    /**
     * Target product
     * 
     **/
    target: ProductWsDTO

}


// Representation of a Variant Matrix Element
interface VariantMatrixElementWsDTO {

    /**
     * Variant value category for variant matrix element
     * 
     **/
    variantValueCategory: VariantValueCategoryWsDTO
    ,

    /**
     * Parent variant category for variant matrix element
     * 
     **/
    parentVariantCategory: VariantCategoryWsDTO
    ,

    /**
     * Variant option for variant matrix element
     * 
     **/
    variantOption: VariantOptionWsDTO
    ,

    /**
     * List of elements with the type of variant matrix element
     * 
     **/
    elements: VariantMatrixElementWsDTO[]
    ,

    /**
     * 
     * 
     **/
    isLeaf: Boolean

}


// Representation of a Variant Value Category
interface VariantValueCategoryWsDTO {

    /**
     * Name of the variant value category
     * 
     **/
    name: string
    ,

    /**
     * Sequence number of variant value category
     * 
     **/
    sequence: number
    ,

    /**
     * Parent category of variant value category
     * 
     **/
    superCategories: VariantCategoryWsDTO[]

}


// Representation of a Variant Category
interface VariantCategoryWsDTO {

    /**
     * Variant category name
     * 
     **/
    name: string
    ,

    /**
     * Flag if varian category has image assigned
     * 
     **/
    hasImage: Boolean
    ,

    /**
     * Priority number of variant category
     * 
     **/
    priority: number

}


// Representation of a User
interface UserWsDTO {

    /**
     * User address
     * 
     **/
    defaultAddress: AddressWsDTO
    ,

    /**
     * User title code
     * 
     **/
    titleCode: string
    ,

    /**
     * User title
     * 
     **/
    title: string
    ,

    /**
     * User first name
     * 
     **/
    firstName: string
    ,

    /**
     * User last name
     * 
     **/
    lastName: string
    ,

    /**
     * User preferred currency
     * 
     **/
    currency: CurrencyWsDTO
    ,

    /**
     * User preferred language
     * 
     **/
    language: LanguageWsDTO
    ,

    /**
     * User identifier
     * 
     **/
    displayUid: string
    ,

    /**
     * Customer identifier
     * 
     **/
    customerId: string
    ,

    /**
     * Deactivation date
     * 
     **/
    deactivationDate: Date
    ,

    /**
     * Name of the default pick up location
     * 
     **/
    defaultPointOfServiceName: string

}


// Representation of a UserSignUp. Consists of fields required to register a new customer
interface UserSignUpWsDTO {

    /**
     * user id, unique string required to create new user. It can be email
     * 
     **/
    uid: string
    ,

    /**
     * first name of the user
     * 
     **/
    firstName: string
    ,

    /**
     * last name of the user
     * 
     **/
    lastName: string
    ,

    /**
     * 
     * 
     **/
    titleCode: string
    ,

    /**
     * User password.
     * 
     **/
    password: string
    ,

    /**
     * Authentication identifier of a new B2C customer registration. Only needed when OTP for registration is enabled.
     * 
     **/
    verificationTokenId: string
    ,

    /**
     * Code included in the email sent to the customer to be registered. Only needed when OTP for registration is enabled.
     * 
     **/
    verificationTokenCode: string

}


// Representation of a request of replacing an existing user's login id.
interface ReplaceLoginIdInputWsDTO {

    /**
     * New login id that is a unique string to identify a user.
     * 
     **/
    newLoginId: string
    ,

    /**
     * User password
     * 
     **/
    password: string

}


// Representation of a request of replacing an existing user's password
interface ReplacePasswordInputWsDTO {

    /**
     * Current password of the customer.
     * 
     **/
    oldPassword: string
    ,

    /**
     * New password of the customer.
     * 
     **/
    newPassword: string

}


// Representation of a Language
interface LanguageWsDTO {

    /**
     * iso code of the language
     * 
     **/
    isocode: string
    ,

    /**
     * name of the language
     * 
     **/
    name: string
    ,

    /**
     * name the language in native form
     * 
     **/
    nativeName: string
    ,

    /**
     * true/false indicator when the language is active
     * 
     **/
    active: Boolean

}


// Lists all available languages (all languages used for a particular store). If the list of languages for a base store is empty, a list of all languages available in the system will be returned
interface LanguageListWsDTO {

    /**
     * This is the list of Language fields that should be returned in the response body
     * 
     **/
    languages: LanguageWsDTO[]

}


// Representation of a user group
interface UserGroupWsDTO {

    /**
     * List of members
     * 
     **/
    members: PrincipalWsDTO[]
    ,

    /**
     * List of subgroups
     * 
     **/
    subGroups: UserGroupWsDTO[]
    ,

    /**
     * Number of members
     * 
     **/
    membersCount: number

}


// Representation of a User Group List
interface UserGroupListWsDTO {

    /**
     * List of user groups
     * 
     **/
    userGroups: UserGroupWsDTO[]
    ,

    /**
     * Total number
     * 
     **/
    totalNumber: number
    ,

    /**
     * Page size
     * 
     **/
    pageSize: number
    ,

    /**
     * Number of pages
     * 
     **/
    numberOfPages: number
    ,

    /**
     * Current page
     * 
     **/
    currentPage: number

}


// Representation of a Member List
interface MemberListWsDTO {

    /**
     * List of member
     * 
     **/
    members: PrincipalWsDTO[]

}


// Representation of a Reset Password
interface ResetPasswordWsDTO {

    /**
     * token value which will be generated as unique string that will be sent with email to allow user for completing reset-password operation
     * 
     **/
    token: string
    ,

    /**
     * new password string which is required to complete process of resetting password
     * 
     **/
    newPassword: string

}


// Representation of an Order History List
interface OrderHistoryListWsDTO {

    /**
     * List of order history items
     * 
     **/
    orders: OrderHistoryWsDTO[]
    ,

    /**
     * List of sorts
     * 
     **/
    sorts: SortWsDTO[]
    ,

    /**
     * Pagination items
     * 
     **/
    pagination: PaginationWsDTO

}


// Representation of an Order History
interface OrderHistoryWsDTO {

    /**
     * Code of Order History
     * 
     **/
    code: string
    ,

    /**
     * Status of Order History
     * 
     **/
    status: string
    ,

    /**
     * Status display
     * 
     **/
    statusDisplay: string
    ,

    /**
     * Date of placing order
     * 
     **/
    placed: Date
    ,

    /**
     * Guest user identifier
     * 
     **/
    guid: string
    ,

    /**
     * Total price
     * 
     **/
    total: PriceWsDTO

}


// Representation a Sort option
interface SortWsDTO {

    /**
     * Code of Sort
     * 
     **/
    code: string
    ,

    /**
     * Name of Sort
     * 
     **/
    name: string
    ,

    /**
     * Flag stating when Sort is selected
     * 
     **/
    selected: Boolean

}


// Representation of a search query pagination
interface PageableWsDTO {

    /**
     * The number of results per page. A page may have less results if there are less than a full page of results, only on the last page in the results
     * 
     **/
    pageSize: number
    ,

    /**
     * The current page number. The first page is number zero (0), the second page is number one (1), and so on
     * 
     **/
    currentPage: number
    ,

    /**
     * The selected sort code
     * 
     **/
    sort: string

}


// Representation of a search results pagination
interface PaginationWsDTO {

    /**
     * The total number of pages. This is the number of pages, each of pageSize, required to display the totalResults.
    
     * 
     **/
    totalPages: number
    ,

    /**
     * The total number of matched results across all pages
     * 
     **/
    totalResults: number

}


// Representation of a Search State
interface SearchStateWsDTO {

    /**
     * Url address of search state
     * 
     **/
    url: string
    ,

    /**
     * Query of search state
     * 
     **/
    query: SearchQueryWsDTO

}


// Representation of a Search Query
interface SearchQueryWsDTO {

    /**
     * Value of search query
     * 
     **/
    value: string

}


// Representation of a Product List
interface ProductListWsDTO {

    /**
     * List of products
     * 
     **/
    products: ProductWsDTO[]
    ,

    /**
     * Catalog of product list
     * 
     **/
    catalog: string
    ,

    /**
     * Version of product list
     * 
     **/
    version: string
    ,

    /**
     * Total product count
     * 
     **/
    totalProductCount: number
    ,

    /**
     * Total page count
     * 
     **/
    totalPageCount: number
    ,

    /**
     * Number of current page
     * 
     **/
    currentPage: number

}


// Representation of a Product Express Update Element
interface ProductExpressUpdateElementWsDTO {

    /**
     * Code of product express update element
     * 
     **/
    code: string
    ,

    /**
     * Catalog identifier
     * 
     **/
    catalogId: string
    ,

    /**
     * Catalog version
     * 
     **/
    catalogVersion: string

}


// Representation of a Product Express Update Element List
interface ProductExpressUpdateElementListWsDTO {

    /**
     * List of product express update element
     * 
     **/
    productExpressUpdateElements: ProductExpressUpdateElementWsDTO[]

}


// Representation of an Order Status Update Element
interface OrderStatusUpdateElementWsDTO {

    /**
     * Code of update element of order status
     * 
     **/
    code: string
    ,

    /**
     * Status of update element
     * 
     **/
    status: string
    ,

    /**
     * BaseSite identifier
     * 
     **/
    baseSiteId: string

}


// Representation of an Order Status Update Element List
interface OrderStatusUpdateElementListWsDTO {

    /**
     * List of order status update elements
     * 
     **/
    orderStatusUpdateElements: OrderStatusUpdateElementWsDTO[]

}


// Representation of a Title
interface TitleWsDTO {

    /**
     * Title code
     * 
     **/
    code: string
    ,

    /**
     * Title name
     * 
     **/
    name: string

}


// Representation of a Title List
interface TitleListWsDTO {

    /**
     * List of titles
     * 
     **/
    titles: TitleWsDTO[]

}


// Representation of a Card Type
interface CardTypeWsDTO {

    /**
     * Card type code
     * 
     **/
    code: string
    ,

    /**
     * Card type name
     * 
     **/
    name: string

}


// Representation of a Card Type List
interface CardTypeListWsDTO {

    /**
     * List of card types
     * 
     **/
    cardTypes: CardTypeWsDTO[]

}


// Representation of an Abstract Order
interface AbstractOrderWsDTO {

    /**
     * Code number of order
     * 
     **/
    code: string
    ,

    /**
     * Flag stating iv value is net-value
     * 
     **/
    net: Boolean
    ,

    /**
     * Total price with tax
     * 
     **/
    totalPriceWithTax: PriceWsDTO
    ,

    /**
     * Total price value
     * 
     **/
    totalPrice: PriceWsDTO
    ,

    /**
     * Total tax price
     * 
     **/
    totalTax: PriceWsDTO
    ,

    /**
     * Subtotal price
     * 
     **/
    subTotal: PriceWsDTO
    ,

    /**
     * Delivery cost
     * 
     **/
    deliveryCost: PriceWsDTO
    ,

    /**
     * List of order entries
     * 
     **/
    entries: OrderEntryWsDTO[]
    ,

    /**
     * List of entry groups
     * 
     **/
    entryGroups: EntryGroupWsDTO[]
    ,

    /**
     * 
     * 
     **/
    totalItems: number
    ,

    /**
     * Delivery mode information
     * 
     **/
    deliveryMode: DeliveryModeWsDTO
    ,

    /**
     * Delivery address
     * 
     **/
    deliveryAddress: AddressWsDTO
    ,

    /**
     * Payment information
     * 
     **/
    paymentInfo: PaymentDetailsWsDTO
    ,

    /**
     * List of applied order promotions
     * 
     **/
    appliedOrderPromotions: PromotionResultWsDTO[]
    ,

    /**
     * List of applied product promotions
     * 
     **/
    appliedProductPromotions: PromotionResultWsDTO[]
    ,

    /**
     * Product discounts
     * 
     **/
    productDiscounts: PriceWsDTO
    ,

    /**
     * Order discounts
     * 
     **/
    orderDiscounts: PriceWsDTO
    ,

    /**
     * Total discounts
     * 
     **/
    totalDiscounts: PriceWsDTO
    ,

    /**
     * Site
     * 
     **/
    site: string
    ,

    /**
     * Store
     * 
     **/
    store: string
    ,

    /**
     * Guest user id identifier
     * 
     **/
    guid: string
    ,

    /**
     * Flag showing if order is calculated
     * 
     **/
    calculated: Boolean
    ,

    /**
     * List of applied vouchers
     * 
     **/
    appliedVouchers: VoucherWsDTO[]
    ,

    /**
     * User information
     * 
     **/
    user: PrincipalWsDTO
    ,

    /**
     * List of pickup order entry group
     * 
     **/
    pickupOrderGroups: PickupOrderEntryGroupWsDTO[]
    ,

    /**
     * List of delivery order entries group
     * 
     **/
    deliveryOrderGroups: DeliveryOrderEntryGroupWsDTO[]
    ,

    /**
     * Quantity of pickup items
     * 
     **/
    pickupItemsQuantity: number
    ,

    /**
     * Quantity of delivery items
     * 
     **/
    deliveryItemsQuantity: number
    ,

    /**
     * Customer requested date for order retrieval
     * 
     **/
    requestedRetrievalAt: string
    ,

    /**
     * Billing address, which is mutually exclusive with paymentInfo.billingAddress.
     * 
     **/
    sapBillingAddress: AddressWsDTO
    ,

    /**
     * Email of customer.
     * 
     **/
    sapCustomerEmail: string
    ,

    /**
     * The payment option identifier. It specifies which option the consumer selected to make the
        payment for the cart.
    
     * 
     **/
    sapPaymentOptionId: string
    ,

    /**
     * 
     * 
     **/
    paymentType: B2BPaymentTypeWsDTO
    ,

    /**
     * 
     * 
     **/
    purchaseOrderNumber: string

}


// 
interface B2BPaymentTypeWsDTO {

    /**
     * 
     * 
     **/
    code: string
    ,

    /**
     * 
     * 
     **/
    displayName: string

}


// The payment option information. If payment option identifier is set, then the payment type will            also be set accordingly, and other endpoints can no longer modify the payment type.

interface SAPPaymentOptionRequestWsDTO {

    /**
     * The payment option identifier. It specifies which option the consumer selected to make the
        payment for the cart.
    
     * 
     **/
    sapPaymentOptionId: string
    ,

    /**
     * Purchase order number
     * 
     **/
    purchaseOrderNumber: string

}


// Representation of a Consignment
interface ConsignmentWsDTO {

    /**
     * Consignment code
     * 
     **/
    code: string
    ,

    /**
     * Consignment tracking identifier
     * 
     **/
    trackingID: string
    ,

    /**
     * Consignment status
     * 
     **/
    status: string
    ,

    /**
     * Consignment status display
     * 
     **/
    statusDisplay: string
    ,

    /**
     * Consignment status date
     * 
     **/
    statusDate: Date
    ,

    /**
     * List of consignment entries
     * 
     **/
    entries: ConsignmentEntryWsDTO[]
    ,

    /**
     * Shipping address
     * 
     **/
    shippingAddress: AddressWsDTO
    ,

    /**
     * Delivery point of service
     * 
     **/
    deliveryPointOfService: PointOfServiceWsDTO
    ,

    /**
     * Consignment item arrival slot
     * 
     **/
    arrivalSlot: EntryArrivalSlotWsDTO

}


// Representation of a Consignment Entry
interface ConsignmentEntryWsDTO {

    /**
     * Order entry of Consignment entry
     * 
     **/
    orderEntry: OrderEntryWsDTO
    ,

    /**
     * Quantity value of Consignment entry
     * 
     **/
    quantity: number
    ,

    /**
     * Shipped quantity
     * 
     **/
    shippedQuantity: number

}


// Representation of a Cart. Note that sapBillingAddress is mutually exclusive with paymentInfo.billingAddress, which is used when the billing address is created concurrently with the paymentInfo.        sapBillingAddress is used when there is a need to save the billing address, but the related paymentInfo has not been created yet.
interface CartWsDTO {

    /**
     * Total unit count
     * 
     **/
    totalUnitCount: number
    ,

    /**
     * List of potential order promotions for cart
     * 
     **/
    potentialOrderPromotions: PromotionResultWsDTO[]
    ,

    /**
     * List of potential product promotions for cart
     * 
     **/
    potentialProductPromotions: PromotionResultWsDTO[]
    ,

    /**
     * Name of the cart
     * 
     **/
    name: string
    ,

    /**
     * Description of the cart
     * 
     **/
    description: string
    ,

    /**
     * Date of cart expiration time
     * 
     **/
    expirationTime: Date
    ,

    /**
     * Date of saving cart
     * 
     **/
    saveTime: Date
    ,

    /**
     * Information about person who saved cart
     * 
     **/
    savedBy: PrincipalWsDTO
    ,

    /**
     * Earliest possible retrieval date available for order
     * 
     **/
    earliestRetrievalAt: string
    ,

    /**
     * Messages about supplementary info, warning messages related to the cart
     * 
     **/
    _messages: ApiMessageWsDTO[]

}


//             Representation of supplementary info, warning messages, even when the business APIs successfully execute their operations.

interface ApiMessageWsDTO {

    /**
     * Type of message, e.g. info, warning
     * 
     **/
    kind: string
    ,

    /**
     * A unique identifier for the message
     * 
     **/
    code: string
    ,

    /**
     * A human-readable description of the message
     * 
     **/
    message: string
    ,

    /**
     * Reference(s) to the specific part(s) of the cart that the message pertains to
     * 
     **/
    target: string

}


// Representation of a Cart list
interface CartListWsDTO {

    /**
     * List of carts
     * 
     **/
    carts: CartWsDTO[]

}


// Representation of a Cart modification
interface CartModificationWsDTO {

    /**
     * Status code of cart modification
     * 
     **/
    statusCode: string
    ,

    /**
     * Quantity added with cart modification
     * 
     **/
    quantityAdded: number
    ,

    /**
     * Total number of products to be created, added or updated during a cart modification. This value is always the quantity that has been requested.
     * 
     **/
    quantity: number
    ,

    /**
     * Order entry
     * 
     **/
    entry: OrderEntryWsDTO
    ,

    /**
     * Delivery mode changed
     * 
     **/
    deliveryModeChanged: Boolean
    ,

    /**
     * Status message
     * 
     **/
    statusMessage: string

}


// Representation of a Cart modification list
interface CartModificationListWsDTO {

    /**
     * List of cart modifications
     * 
     **/
    cartModifications: CartModificationWsDTO[]

}


// Representation of a Payment Details
interface PaymentDetailsWsDTO {

    /**
     * Unique identifier of payment detail
     * 
     **/
    id: string
    ,

    /**
     * Name of account holder
     * 
     **/
    accountHolderName: string
    ,

    /**
     * Type of payment card
     * 
     **/
    cardType: CardTypeWsDTO
    ,

    /**
     * Payment card number
     * 
     **/
    cardNumber: string
    ,

    /**
     * Start month from which payment is valid
     * 
     **/
    startMonth: string
    ,

    /**
     * Start year from which payment is valid
     * 
     **/
    startYear: string
    ,

    /**
     * Month of expiration of payment
     * 
     **/
    expiryMonth: string
    ,

    /**
     * Year of expiration of payment
     * 
     **/
    expiryYear: string
    ,

    /**
     * Issue number
     * 
     **/
    issueNumber: string
    ,

    /**
     * Identifier of subscription
     * 
     **/
    subscriptionId: string
    ,

    /**
     * Flag to mark if payment is saved one
     * 
     **/
    saved: Boolean
    ,

    /**
     * Flag to mark if payment the default one
     * 
     **/
    defaultPayment: Boolean
    ,

    /**
     * Address details to be considered as billing address
     * 
     **/
    billingAddress: AddressWsDTO
    ,

    /**
     * Payment Method
     * 
     **/
    sapPaymentMethod: PaymentMethodWsDTO

}


// Representation of a Payment details list
interface PaymentDetailsListWsDTO {

    /**
     * List of payment details
     * 
     **/
    payments: PaymentDetailsWsDTO[]

}


// Representation of a Delivery mode
interface DeliveryModeWsDTO {

    /**
     * Code of the delivery mode
     * 
     **/
    code: string
    ,

    /**
     * Name of the delivery mode
     * 
     **/
    name: string
    ,

    /**
     * Description of the delivery mode
     * 
     **/
    description: string
    ,

    /**
     * Cost of the delivery
     * 
     **/
    deliveryCost: PriceWsDTO

}


// Representation of a Delivery mode list
interface DeliveryModeListWsDTO {

    /**
     * List of delivery modes
     * 
     **/
    deliveryModes: DeliveryModeWsDTO[]

}


// Representation of a order. Note that sapBillingAddress is mutually exclusive with paymentInfo.billingAddress, which is used when the billing address is created concurrently with the paymentInfo.        sapBillingAddress is used when there is a need to save the billing address, but the related paymentInfo has not been created yet.
interface OrderWsDTO {

    /**
     * Date of order creation
     * 
     **/
    created: Date
    ,

    /**
     * Status of order
     * 
     **/
    status: string
    ,

    /**
     * Status display
     * 
     **/
    statusDisplay: string
    ,

    /**
     * Flag showing if customer is Guest customer
     * 
     **/
    guestCustomer: Boolean
    ,

    /**
     * List of consignment
     * 
     **/
    consignments: ConsignmentWsDTO[]
    ,

    /**
     * Order delivery status
     * 
     **/
    deliveryStatus: string
    ,

    /**
     * Order delivery status display
     * 
     **/
    deliveryStatusDisplay: string
    ,

    /**
     * List of unconsigned order entries
     * 
     **/
    unconsignedEntries: OrderEntryWsDTO[]
    ,

    /**
     * Boolean flag showing if order is cancellable
     * 
     **/
    cancellable: Boolean
    ,

    /**
     * Boolean flag showing if order is returnable
     * 
     **/
    returnable: Boolean

}


// Records of item arrivals facilitate the tracking and management of item quantities, associated arrival times, and certainty levels. These records distinguish between guaranteed, estimated, and unknown arrival scenarios.
interface EntryArrivalSlotWsDTO {

    /**
     * Represents the number of items expected to arrive.
     * 
     **/
    quantity: number
    ,

    /**
     * The date associated with the expected arrival slot.
     * 
     **/
    at: Date
    ,

    /**
     * The accuracy of the arrival slot as estimated, or unknown.
     * 
     **/
    accuracy: AccuracyWsDTOType

}


// Representation of an Order entry
interface OrderEntryWsDTO {

    /**
     * Entry number of the order entry
     * 
     **/
    entryNumber: number
    ,

    /**
     * Quantity number of items in order entry
     * 
     **/
    quantity: number
    ,

    /**
     * Base price of order entry item
     * 
     **/
    basePrice: PriceWsDTO
    ,

    /**
     * Total price of order entry item
     * 
     **/
    totalPrice: PriceWsDTO
    ,

    /**
     * Product details of order entry
     * 
     **/
    product: ProductWsDTO
    ,

    /**
     * Flag defining if order entry item is updateable
     * 
     **/
    updateable: Boolean
    ,

    /**
     * Delivery mode
     * 
     **/
    deliveryMode: DeliveryModeWsDTO
    ,

    /**
     * Configuration info of order entry
     * 
     **/
    configurationInfos: ConfigurationInfoWsDTO[]
    ,

    /**
     * List of aggregated status information per entry, relevant if the entry is configurable and its configuration contains one or many issues in different severities. Note that configurators typically raise such issues only in case the parent document is changeable.
    In this case the issues (depending on their severity) need to be fixed before a checkout can be done. This means this segment can be present for a cart entry, for order entries it will always be empty
     * 
     **/
    statusSummaryList: StatusSummaryWsDTO[]
    ,

    /**
     * Point of service associated with order entry
     * 
     **/
    deliveryPointOfService: PointOfServiceWsDTO
    ,

    /**
     * Total price of cancelled items which belong to the order entry item
     * 
     **/
    cancelledItemsPrice: PriceWsDTO
    ,

    /**
     * Quantity number of cancellable items in order entry
     * 
     **/
    cancellableQuantity: number
    ,

    /**
     * Total price of returned items which belong to the order entry item
     * 
     **/
    returnedItemsPrice: PriceWsDTO
    ,

    /**
     * Quantity number of returnable items in order entry
     * 
     **/
    returnableQuantity: number
    ,

    /**
     * List of item arrival slot
     * 
     **/
    arrivalSlots: EntryArrivalSlotWsDTO[]

}


// Representation of an Order entry list consumed
interface OrderEntryListWsDTO {

    /**
     * List of order entries
     * 
     **/
    orderEntries: OrderEntryWsDTO[]

}


// Representation of a Promotion order entry consumed
interface PromotionOrderEntryConsumedWsDTO {

    /**
     * Order entry code
     * 
     **/
    code: string
    ,

    /**
     * Adjusted unit price for promotion order entry
     * 
     **/
    adjustedUnitPrice: number
    ,

    /**
     * Order entry number
     * 
     **/
    orderEntryNumber: number
    ,

    /**
     * Quantity of promotion order entry
     * 
     **/
    quantity: number

}


// Representation of an Entry Group
interface EntryGroupWsDTO {

    /**
     * List of order entries
     * 
     **/
    entries: OrderEntryWsDTO[]
    ,

    /**
     * List of child entry groups
     * 
     **/
    entryGroups: EntryGroupWsDTO[]
    ,

    /**
     * Identifier of the entry group
     * 
     **/
    entryGroupNumber: Integer
    ,

    /**
     * Label for the entry group
     * 
     **/
    label: string
    ,

    /**
     * Indicates if the entry group is in an error state
     * 
     **/
    erroneous: Boolean
    ,

    /**
     * Indicates type of the group, possible values are STANDALONE, CONFIGURABLEBUNDLE or any customer implemented type for any new provider
     * 
     **/
    type: string

}


// Representation of an Order Entry Group
interface OrderEntryGroupWsDTO {

    /**
     * Total price with tax
     * 
     **/
    totalPriceWithTax: PriceWsDTO
    ,

    /**
     * List of order entries
     * 
     **/
    entries: OrderEntryWsDTO[]
    ,

    /**
     * Quantity of order entries in a group
     * 
     **/
    quantity: number

}


// Representation of a Pickup Order Entry Group
interface PickupOrderEntryGroupWsDTO {

    /**
     * Delivery point of service
     * 
     **/
    deliveryPointOfService: PointOfServiceWsDTO
    ,

    /**
     * Distance calculated to pickup place
     * 
     **/
    distance: number

}


// Representation of a Delivery Order Entry Group
interface DeliveryOrderEntryGroupWsDTO {

    /**
     * Delivery address for order entry group
     * 
     **/
    deliveryAddress: AddressWsDTO

}


// Representation of a Promotion result
interface PromotionResultWsDTO {

    /**
     * Description of promotion result
     * 
     **/
    description: string
    ,

    /**
     * Promotion information for given promotion result
     * 
     **/
    promotion: PromotionWsDTO
    ,

    /**
     * List of promotion order entries consumed
     * 
     **/
    consumedEntries: PromotionOrderEntryConsumedWsDTO[]

}


// Representation of a Promotion result list
interface PromotionResultListWsDTO {

    /**
     * List of promotion results
     * 
     **/
    promotions: PromotionResultWsDTO[]

}


// Representation of a Principal webservice DTO used for defining User data types
interface PrincipalWsDTO {

    /**
     * Unique user identifier
     * 
     **/
    uid: string
    ,

    /**
     * Name of the user
     * 
     **/
    name: string

}


// Representation of a Point of service
interface PointOfServiceWsDTO {

    /**
     * Name of the point of service
     * 
     **/
    name: string
    ,

    /**
     * Display name of the point of service
     * 
     **/
    displayName: string
    ,

    /**
     * Url address of the point of service
     * 
     **/
    url: string
    ,

    /**
     * Description of the point of service
     * 
     **/
    description: string
    ,

    /**
     * Opening hours of point of service
     * 
     **/
    openingHours: OpeningScheduleWsDTO
    ,

    /**
     * Store content of given point of service
     * 
     **/
    storeContent: string
    ,

    /**
     * List of features for a given point of service
     * 
     **/
    features: String, String[]
        ,

        /**
         * Geopoint localization info about point of service
         * 
         **/
        geoPoint: GeoPointWsDTO
            ,

            /**
             * Distance to the point of service as text value
             * 
             **/
            formattedDistance: string
                ,

                /**
                 * Distance to the point of service as number value
                 * 
                 **/
                distanceKm: number
                    ,

                    /**
                     * Image associated with the point of service
                     * 
                     **/
                    mapIcon: ImageWsDTO
                        ,

                        /**
                         * Address information of point of service
                         * 
                         **/
                        address: AddressWsDTO
                            ,

                            /**
                             * Collection of images associated with a point of service
                             * 
                             **/
                            storeImages: ImageWsDTO[]
                                ,

                                /**
                                 * Instructions used for picking up an order in store
                                 * 
                                 **/
                                pickUpInStoreInstructions: string
        
            }


// Request body fields required and optional to operate on address data. The DTO is in XML or .json format
interface AddressWsDTO {

    /**
     * Unique id value of the address which is optional while creating new address. While performing other address operations this value is the key
     * 
     **/
    id: string
    ,

    /**
     * Title of the address person
     * 
     **/
    title: string
    ,

    /**
     * Code of the title
     * 
     **/
    titleCode: string
    ,

    /**
     * First name of the address person
     * 
     **/
    firstName: string
    ,

    /**
     * Last name of the address person
     * 
     **/
    lastName: string
    ,

    /**
     * Company Name
     * 
     **/
    companyName: string
    ,

    /**
     * First line of the address
     * 
     **/
    line1: string
    ,

    /**
     * Second line of the address
     * 
     **/
    line2: string
    ,

    /**
     * Town, field required
     * 
     **/
    town: string
    ,

    /**
     * Region where address belongs to
     * 
     **/
    region: RegionWsDTO
    ,

    /**
     * District name
     * 
     **/
    district: string
    ,

    /**
     * Postal code of the address
     * 
     **/
    postalCode: string
    ,

    /**
     * Phone number
     * 
     **/
    phone: string
    ,

    /**
     * Cellphone number
     * 
     **/
    cellphone: string
    ,

    /**
     * Email address
     * 
     **/
    email: string
    ,

    /**
     * Country where address is located
     * 
     **/
    country: CountryWsDTO
    ,

    /**
     * Boolean flag if address is for shipping
     * 
     **/
    shippingAddress: Boolean
    ,

    /**
     * Boolean flag if address is default
     * 
     **/
    defaultAddress: Boolean
    ,

    /**
     * Boolean flag if address is visible in the Address Book
     * 
     **/
    visibleInAddressBook: Boolean
    ,

    /**
     * Boolean flag if address is formatted
     * 
     **/
    formattedAddress: string

}


// Representation of an Address list
interface AddressListWsDTO {

    /**
     * List of addresses
     * 
     **/
    addresses: AddressWsDTO[]

}


// Response body fields which will be returned while fetching the list of countries. The DTO is in XML or .json format
interface CountryWsDTO {

    /**
     * Country code in iso format
     * 
     **/
    isocode: string
    ,

    /**
     * Name of the country
     * 
     **/
    name: string

}


// List of countries
interface CountryListWsDTO {

    /**
     * This is the list of Country fields that should be returned in the response body
     * 
     **/
    countries: CountryWsDTO[]

}


// Response body fields which will be returned while fetching the list of country's regions.
interface RegionWsDTO {

    /**
     * Country and Region code in iso format
     * 
     **/
    isocode: string
    ,

    /**
     * Region code in short iso form
     * 
     **/
    isocodeShort: string
    ,

    /**
     * Country code in iso format
     * 
     **/
    countryIso: string
    ,

    /**
     * Name of the region
     * 
     **/
    name: string

}


// List of Regions
interface RegionListWsDTO {

    /**
     * This is the list of Region fields that should be returned in the response body
     * 
     **/
    regions: RegionWsDTO[]

}


// List of OpeningDay
interface OpeningDayWsDTO {

    /**
     * Starting time of opening day
     * 
     **/
    openingTime: TimeWsDTO
    ,

    /**
     * Closing time of opening day
     * 
     **/
    closingTime: TimeWsDTO

}


// Representation of an Opening schedule
interface OpeningScheduleWsDTO {

    /**
     * Name of the opening schedule
     * 
     **/
    name: string
    ,

    /**
     * Code of the opening schedule
     * 
     **/
    code: string
    ,

    /**
     * List of weekday opening days
     * 
     **/
    weekDayOpeningList: WeekdayOpeningDayWsDTO[]
    ,

    /**
     * List of special opening days
     * 
     **/
    specialDayOpeningList: SpecialOpeningDayWsDTO[]

}


// Representation of a GeoPoint
interface GeoPointWsDTO {

    /**
     * Geopoint latitude
     * 
     **/
    latitude: number
    ,

    /**
     * Geopoint longitude
     * 
     **/
    longitude: number

}


// Representation of a special opening day
interface SpecialOpeningDayWsDTO {

    /**
     * Date of special opening day
     * 
     **/
    date: Date
    ,

    /**
     * Text representation of the date of special opening day
     * 
     **/
    formattedDate: string
    ,

    /**
     * Flag stating if special opening day is closed
     * 
     **/
    closed: Boolean
    ,

    /**
     * Name of the special opening day event
     * 
     **/
    name: string
    ,

    /**
     * Comment field
     * 
     **/
    comment: string

}


// Representation of a Time
interface TimeWsDTO {

    /**
     * Hour part of the time data
     * 
     **/
    hour: Byte
    ,

    /**
     * Minute part of the time data
     * 
     **/
    minute: Byte
    ,

    /**
     * Formatted hour
     * 
     **/
    formattedHour: string
    ,

    /**
     * Meridiem indicator
     * 
     **/
    meridiemIndicator: string

}


// Representation of a Weekday Opening Day
interface WeekdayOpeningDayWsDTO {

    /**
     * Text representation of week day opening day
     * 
     **/
    weekDay: string
    ,

    /**
     * Flag stating if weekday opening day is closed
     * 
     **/
    closed: Boolean

}


// Representation of a Store finder search page
interface StoreFinderSearchPageWsDTO {

    /**
     * List of stores
     * 
     **/
    stores: PointOfServiceWsDTO[]
    ,

    /**
     * List of sortings
     * 
     **/
    sorts: SortWsDTO[]
    ,

    /**
     * Pagination
     * 
     **/
    pagination: PaginationWsDTO
    ,

    /**
     * Location text
     * 
     **/
    locationText: string
    ,

    /**
     * Source latitude
     * 
     **/
    sourceLatitude: number
    ,

    /**
     * Source longitude
     * 
     **/
    sourceLongitude: number
    ,

    /**
     * Bound north latitude
     * 
     **/
    boundNorthLatitude: number
    ,

    /**
     * Bound east longitude
     * 
     **/
    boundEastLongitude: number
    ,

    /**
     * Bound south latitude
     * 
     **/
    boundSouthLatitude: number
    ,

    /**
     * Bound west longitude
     * 
     **/
    boundWestLongitude: number

}


// Representation of a Breadcrumb
interface BreadcrumbWsDTO {

    /**
     * Code of the facet
     * 
     **/
    facetCode: string
    ,

    /**
     * Name of the facet
     * 
     **/
    facetName: string
    ,

    /**
     * Value code of the facet
     * 
     **/
    facetValueCode: string
    ,

    /**
     * Value name of the facet
     * 
     **/
    facetValueName: string
    ,

    /**
     * Remove query
     * 
     **/
    removeQuery: SearchStateWsDTO
    ,

    /**
     * Truncate query
     * 
     **/
    truncateQuery: SearchStateWsDTO

}


// Representation of a Facet
interface FacetWsDTO {

    /**
     * Name of the facet
     * 
     **/
    name: string
    ,

    /**
     * Priority value of the facet
     * 
     **/
    priority: number
    ,

    /**
     * Flag stating if facet is category facet
     * 
     **/
    category: Boolean
    ,

    /**
     * Flag stating if facet is multiSelect
     * 
     **/
    multiSelect: Boolean
    ,

    /**
     * Flag stating if facet is visible
     * 
     **/
    visible: Boolean
    ,

    /**
     * List of top facet values
     * 
     **/
    topValues: FacetValueWsDTO[]
    ,

    /**
     * List of all facet values
     * 
     **/
    values: FacetValueWsDTO[]

}


// Representation of a Facet Value
interface FacetValueWsDTO {

    /**
     * Name of the facet value
     * 
     **/
    name: string
    ,

    /**
     * Count of the facet value
     * 
     **/
    count: number
    ,

    /**
     * Query of the facet value
     * 
     **/
    query: SearchStateWsDTO
    ,

    /**
     * Flag stating if facet value is selected
     * 
     **/
    selected: Boolean

}


// Representation od a Product Category Search Page
interface ProductCategorySearchPageWsDTO {

    /**
     * List of subcategories
     * 
     **/
    subCategories: CategoryWsDTO[]

}


// Representation of a Product Search Page
interface ProductSearchPageWsDTO {

    /**
     * Free text search
     * 
     **/
    freeTextSearch: string
    ,

    /**
     * Code of category
     * 
     **/
    categoryCode: string
    ,

    /**
     * Redirect url address keyword
     * 
     **/
    keywordRedirectUrl: string
    ,

    /**
     * Spelling suggestion
     * 
     **/
    spellingSuggestion: SpellingSuggestionWsDTO
    ,

    /**
     * List of products
     * 
     **/
    products: ProductWsDTO[]
    ,

    /**
     * List of sorts
     * 
     **/
    sorts: SortWsDTO[]
    ,

    /**
     * Pagination number
     * 
     **/
    pagination: PaginationWsDTO
    ,

    /**
     * Current query
     * 
     **/
    currentQuery: SearchStateWsDTO
    ,

    /**
     * List of breadcrumbs info
     * 
     **/
    breadcrumbs: BreadcrumbWsDTO[]
    ,

    /**
     * List of facets
     * 
     **/
    facets: FacetWsDTO[]

}


// Representation of a Spell Checker Suggestion
interface SpellingSuggestionWsDTO {

    /**
     * Spelling suggestion
     * 
     **/
    suggestion: string
    ,

    /**
     * Query for spelling suggestion
     * 
     **/
    query: string

}


// Representation of a Solr Search Query
interface SolrSearchQueryWsDTO {

    /**
     * Code of category
     * 
     **/
    categoryCode: string

}


// Representation of a Solr Search Query Term
interface SolrSearchQueryTermWsDTO {

    /**
     * Key of solr search query term
     * 
     **/
    key: string
    ,

    /**
     * Value of solr search query term
     * 
     **/
    value: string

}


// Representation of a Suggestion
interface SuggestionWsDTO {

    /**
     * Suggestion value
     * 
     **/
    value: string

}


// Representation of a Suggestion List
interface SuggestionListWsDTO {

    /**
     * List of suggestions
     * 
     **/
    suggestions: SuggestionWsDTO[]

}


// Representation of a Zone Delivery Mode
interface ZoneDeliveryModeWsDTO {

}


// Representation of a Point Of Service Stock
interface PointOfServiceStockWsDTO {

    /**
     * Stock information about point of service
     * 
     **/
    stockInfo: StockWsDTO

}


// Representation of a Store Finder Stock Search Page
interface StoreFinderStockSearchPageWsDTO {

    /**
     * List of stores
     * 
     **/
    stores: PointOfServiceStockWsDTO[]
    ,

    /**
     * List of sorts
     * 
     **/
    sorts: SortWsDTO[]
    ,

    /**
     * Pagination
     * 
     **/
    pagination: PaginationWsDTO
    ,

    /**
     * Location text
     * 
     **/
    locationText: string
    ,

    /**
     * Source latitude
     * 
     **/
    sourceLatitude: number
    ,

    /**
     * Source longitude
     * 
     **/
    sourceLongitude: number
    ,

    /**
     * Bound to north latitude
     * 
     **/
    boundNorthLatitude: number
    ,

    /**
     * Bound to east longitude
     * 
     **/
    boundEastLongitude: number
    ,

    /**
     * Bound to south latitude
     * 
     **/
    boundSouthLatitude: number
    ,

    /**
     * Bound to west longitude
     * 
     **/
    boundWestLongitude: number
    ,

    /**
     * Product
     * 
     **/
    product: ProductWsDTO

}


// Representation of an Address Validation
interface AddressValidationWsDTO {

    /**
     * List of errors
     * 
     **/
    errors: ErrorListWsDTO
    ,

    /**
     * Decision
     * 
     **/
    decision: string
    ,

    /**
     * List of suggested addresses
     * 
     **/
    suggestedAddresses: AddressWsDTO[]

}


// Representation of a Save Cart Result
interface SaveCartResultWsDTO {

    /**
     * Cart data information for saved cart
     * 
     **/
    savedCartData: CartWsDTO

}


// Representation of a Consent Template List
interface ConsentTemplateListWsDTO {

    /**
     * List of consent templates
     * 
     **/
    consentTemplates: ConsentTemplateWsDTO[]

}


// Representation of a Consent Template
interface ConsentTemplateWsDTO {

    /**
     * Consent template identifier
     * 
     **/
    id: string
    ,

    /**
     * Consent template name
     * 
     **/
    name: string
    ,

    /**
     * Consent template description
     * 
     **/
    description: string
    ,

    /**
     * Consent template version
     * 
     **/
    version: number
    ,

    /**
     * Current consent
     * 
     **/
    currentConsent: ConsentWsDTO

}


// Representation of a Consent
interface ConsentWsDTO {

    /**
     * Code of consent
     * 
     **/
    code: string
    ,

    /**
     * Date of consenting
     * 
     **/
    consentGivenDate: Date
    ,

    /**
     * Consent withdrawn date
     * 
     **/
    consentWithdrawnDate: Date

}


// Configuration information of captcha
interface CaptchaConfigWsDTO {

    /**
     * Indicates if the captcha is enabled or not
     * 
     **/
    enabled: boolean
    ,

    /**
     * The public key used in captcha validation
     * 
     **/
    publicKey: string

}


// Representation of a Base Store
interface BaseStoreWsDTO {

    /**
     * Base store name
     * 
     **/
    name: string
    ,

    /**
     * Flag defining is external tax is enabled
     * 
     **/
    externalTaxEnabled: Boolean
    ,

    /**
     * Payment provider
     * 
     **/
    paymentProvider: string
    ,

    /**
     * Create return process code
     * 
     **/
    createReturnProcessCode: string
    ,

    /**
     * Maximum radius for searching point of service
     * 
     **/
    maxRadiusForPosSearch: number
    ,

    /**
     * Submit order process code
     * 
     **/
    submitOrderProcessCode: string
    ,

    /**
     * List of currencies
     * 
     **/
    currencies: CurrencyWsDTO[]
    ,

    /**
     * Default currency
     * 
     **/
    defaultCurrency: CurrencyWsDTO
    ,

    /**
     * Point of service being default delivery origin
     * 
     **/
    defaultDeliveryOrigin: PointOfServiceWsDTO
    ,

    /**
     * Default language
     * 
     **/
    defaultLanguage: LanguageWsDTO
    ,

    /**
     * List of delivery countries
     * 
     **/
    deliveryCountries: CountryWsDTO[]
    ,

    /**
     * List of delivery modes
     * 
     **/
    deliveryModes: DeliveryModeListWsDTO
    ,

    /**
     * List of languages
     * 
     **/
    languages: LanguageWsDTO[]
    ,

    /**
     * List of points of service
     * 
     **/
    pointsOfService: PointOfServiceWsDTO[]
    ,

    /**
     * Flag specifying whether the express checkout option is enabled
     * 
     **/
    expressCheckoutEnabled: Boolean

}


// Representation of a Base Site List
interface BaseSiteListWsDTO {

    /**
     * List of basesites
     * 
     **/
    baseSites: BaseSiteWsDTO[]

}


// Representation of a Base Site
interface BaseSiteWsDTO {

    /**
     * Unique identifier of Basesite
     * 
     **/
    uid: string
    ,

    /**
     * Name of Basesite
     * 
     **/
    name: string
    ,

    /**
     * List of Basestores
     * 
     **/
    stores: BaseStoreWsDTO[]
    ,

    /**
     * Theme of Basesite
     * 
     **/
    theme: string
    ,

    /**
     * Default language for Basesite
     * 
     **/
    defaultLanguage: LanguageWsDTO
    ,

    /**
     * Locale data for Basesite
     * 
     **/
    locale: string
    ,

    /**
     * Channel
     * 
     **/
    channel: string
    ,

    /**
     * List of url encoding attributes
     * 
     **/
    urlEncodingAttributes: String[]
    ,

    /**
     * List of url patterns
     * 
     **/
    urlPatterns: String[]
    ,

    /**
     * Default preview catalog id
     * 
     **/
    defaultPreviewCatalogId: string
    ,

    /**
     * Default preview category code
     * 
     **/
    defaultPreviewCategoryCode: string
    ,

    /**
     * Default preview product code
     * 
     **/
    defaultPreviewProductCode: string
    ,

    /**
     * Indicates whether customer data isolation is enabled for this site. If true, customer can get site
        information after registration, For example registerd username is name@sap.com, returned uid will be
        name@sap.com|baseSiteUid
    
     * 
     **/
    isolated: Boolean
    ,

    /**
     * Captcha configuration
     * 
     **/
    captchaConfig: CaptchaConfigWsDTO

}


// Representation of a Store Count
interface StoreCountWsDTO {

    /**
     * Type of store count
     * 
     **/
    type: string
    ,

    /**
     * Name of store count
     * 
     **/
    name: string
    ,

    /**
     * Iso code of store
     * 
     **/
    isoCode: string
    ,

    /**
     * Count
     * 
     **/
    count: number
    ,

    /**
     * List of store counts
     * 
     **/
    storeCountDataList: StoreCountWsDTO[]

}


// Representation of a Store Count List
interface StoreCountListWsDTO {

    /**
     * List of store counts
     * 
     **/
    countriesAndRegionsStoreCount: StoreCountWsDTO[]

}


// Representation of a Point of Service List
interface PointOfServiceListWsDTO {

    /**
     * List of points of service
     * 
     **/
    pointOfServices: PointOfServiceWsDTO[]

}


// Representation of a Payment Mode
interface PaymentModeWsDTO {

    /**
     * Payment mode code
     * 
     **/
    code: string
    ,

    /**
     * Payment mode name
     * 
     **/
    name: string
    ,

    /**
     * Payment mode description
     * 
     **/
    description: string

}


// Representation of a Payment Mode List
interface PaymentModeListWsDTO {

    /**
     * List of payment modes
     * 
     **/
    paymentModes: PaymentModeWsDTO[]

}


// Representation of a cancellation request entry input for an order
interface CancellationRequestEntryInputWsDTO {

    /**
     * Order entry number of the cancelled product
     * 
     **/
    orderEntryNumber: number
    ,

    /**
     * Quantity of the product which belongs to the order entry and is requested to be cancelled
     * 
     **/
    quantity: number

}


// Representation of a cancellation request entry input list for an order
interface CancellationRequestEntryInputListWsDTO {

    /**
     * Cancellation request entry inputs which contain information about the order entries which are requested to be cancelled
     * 
     **/
    cancellationRequestEntryInputs: CancellationRequestEntryInputWsDTO[]

}


// Representation of a return request entry which contains information about the returned product
interface ReturnRequestEntryWsDTO {

    /**
     * Order entry related to the return request entry
     * 
     **/
    orderEntry: OrderEntryWsDTO
    ,

    /**
     * Quantity which is expected to be returned for this return request entry
     * 
     **/
    expectedQuantity: number
    ,

    /**
     * Refund amount of the entry
     * 
     **/
    refundAmount: PriceWsDTO

}


// Representation of a return request for an order
interface ReturnRequestWsDTO {

    /**
     * Boolean flag for whether the return request is cancellable
     * 
     **/
    cancellable: Boolean
    ,

    /**
     * Return request code
     * 
     **/
    code: string
    ,

    /**
     * Date of the return request creation
     * 
     **/
    creationTime: Date
    ,

    /**
     * Delivery cost
     * 
     **/
    deliveryCost: PriceWsDTO
    ,

    /**
     * Order related to the return request
     * 
     **/
    order: OrderWsDTO
    ,

    /**
     * Boolean flag for whether there is a delivery cost for refund
     * 
     **/
    refundDeliveryCost: Boolean
    ,

    /**
     * Entries of the return request which contains information about the returned product
     * 
     **/
    returnEntries: ReturnRequestEntryWsDTO[]
    ,

    /**
     * URL of the return label
     * 
     **/
    returnLabelDownloadUrl: string
    ,

    /**
     * Return merchandise authorization number
     * 
     **/
    rma: string
    ,

    /**
     * Status of return request
     * 
     **/
    status: string
    ,

    /**
     * Subtotal price
     * 
     **/
    subTotal: PriceWsDTO
    ,

    /**
     * Total price
     * 
     **/
    totalPrice: PriceWsDTO

}


// Representation of a return request entry input for an order
interface ReturnRequestEntryInputWsDTO {

    /**
     * Order entry number of the returned product
     * 
     **/
    orderEntryNumber: number
    ,

    /**
     * Quantity of the product which belongs to the order entry and is requested to be returned
     * 
     **/
    quantity: number

}


// Representation of a return request entry input list for an order
interface ReturnRequestEntryInputListWsDTO {

    /**
     * Code of the order which return request is related to
     * 
     **/
    orderCode: string
    ,

    /**
     * Return request entry inputs which contain information about the order entries which are requested to be returned
     * 
     **/
    returnRequestEntryInputs: ReturnRequestEntryInputWsDTO[]

}


// Representation of an Order Return Request List
interface ReturnRequestListWsDTO {

    /**
     * List of order return requests
     * 
     **/
    returnRequests: ReturnRequestWsDTO[]
    ,

    /**
     * List of sorts
     * 
     **/
    sorts: SortWsDTO[]
    ,

    /**
     * Pagination items
     * 
     **/
    pagination: PaginationWsDTO

}


// Representation of modifications for a return request
interface ReturnRequestModificationWsDTO {

    /**
     * Status of the return request
     * 
     **/
    status: ReturnRequestStatusWsDTOType

}


// Representation of captcha validation result
interface CaptchaValidationResult {

    /**
     * 
     * 
     **/
    success: boolean
    ,

    /**
     * 
     * 
     **/
    reason: string

}


// Representation of captcha configuration for a base store
interface CaptchaValidationContext {

    /**
     * 
     * 
     **/
    captchaToken: string
    ,

    /**
     * 
     * 
     **/
    remoteIp: string
    ,

    /**
     * 
     * 
     **/
    baseSiteId: string
    ,

    /**
     * 
     * 
     **/
    baseStoreId: string
    ,

    /**
     * 
     * 
     **/
    referer: string
    ,

    /**
     * 
     * 
     **/
    captchaCheckEnabled: boolean

}


// Representation of captcha configuration for a base store
interface GoogleValidationResponse {

    /**
     * 
     * 
     **/
    success: Boolean
    ,

    /**
     * 
     * 
     **/
    challengeTime: Date
    ,

    /**
     * 
     * 
     **/
    hostName: string
    ,

    /**
     * 
     * 
     **/
    errorCodes: String[]

}


// Representation of an Invoice
interface SAPInvoiceWsDTO {

    /**
     * Invoice Id
     * 
     **/
    invoiceId: string
    ,

    /**
     * Invoice creation date
     * 
     **/
    createdAt: Date
    ,

    /**
     * Total invoiced amount
     * 
     **/
    totalAmount: PriceWsDTO
    ,

    /**
     * Net invoiced amount
     * 
     **/
    netAmount: PriceWsDTO
    ,

    /**
     * External system identifier where the invoice resides.
     * 
     **/
    externalSystemId: string

}


// Representation of an Invoice List
interface SAPInvoicesWsDTO {

    /**
     * list of invoice
     * 
     **/
    invoices: SAPInvoiceWsDTO[]
    ,

    /**
     * sorting information
     * 
     **/
    sorts: SortWsDTO[]
    ,

    /**
     * pagination information
     * 
     **/
    pagination: PaginationWsDTO

}


// Representation of a metadata of an Order Attachment (a binary file linked to an Order)        
interface SAPOrderAttachmentWsDTO {

    /**
     * Attachment Id which together with the Order code can be used to obtain content of the file
    
     * 
     **/
    sapAttachmentId: string
    ,

    /**
     * Attachment File Name
     * 
     **/
    sapFileName: string

}


// Representation of a search result for Order Attachment metadata
interface SAPOrderAttachmentsWsDTO {

    /**
     * list of Order Attachment objects
     * 
     **/
    sapAttachments: SAPOrderAttachmentWsDTO[]
    ,

    /**
     * sorting information
     * 
     **/
    sorts: SortWsDTO[]
    ,

    /**
     * pagination information
     * 
     **/
    pagination: PaginationWsDTO

}


// Representation of the input for creating a verification token.
interface CreateVerificationTokenInputWsDTO {

    /**
     * Purpose for which the verification token is requested.
     * 
     **/
    purpose: VerificationPurposeWsDTOType
    ,

    /**
     * User login identifier. Target to receive verification token code.
     * 
     **/
    loginId: string
    ,

    /**
     * User password to authenticate the request. This field is required when the purpose is LOGIN.
     * 
     **/
    password: string

}


// Representation of information for obtained verification token.
interface VerificationTokenWsDTO {

    /**
     * Unique token ID generated for verification request, which is used for authentication along with the token code.
     * 
     **/
    tokenId: string
    ,

    /**
     * Verification token expiration time in seconds.
     * 
     **/
    expiresIn: number

}


// Representation of information for sending a token to restore a forgotten password.
interface PasswordRestoreTokenInputWsDTO {

    /**
     * User login identifier. Target to receive the token.
     * 
     **/
    loginId: string

}


// Representation of information of a guest user
interface SAPGuestUserRequestWsDTO {

    /**
     * Email of the guest user. It will be used during the guest checkout process but may be optional when creating a guest user for a cart.
     * 
     **/
    email: string

}


// Representation of information of a saved cart
interface SAPSavedCartRequestWsDTO {

    /**
     * Name of the saved cart.
     * 
     **/
    name: string
    ,

    /**
     * Description of the saved cart.
     * 
     **/
    description: string

}


// Representation of information of a voucher
interface SAPVoucherRequestWsDTO {

    /**
     * Voucher identifier (code).
     * 
     **/
    voucherId: string

}


// Payment Method Code
interface PaymentMethodWsDTO {

    /**
     * Payment Method Code
     * 
     **/
    code: string
    ,

    /**
     * Payment Method Name
     * 
     **/
    name: string

}


// The public key to decrypt an SAP access code
interface SapAccessCodePublicKeyWsDTO {

    /**
     * The public key to decrypt an SAP access code
     * 
     **/
    publicKey: string

}


// Representation of an SAP access code
interface SapAccessCodeWsDTO {

    /**
     * Representation of an SAP access code
     * 
     **/
    accessCode: string

}


// Voucher operation request.
interface SAPVoucherOperationRequestWsDTO {

    /**
     * Voucher code. A valid voucher code can be used to get a discount.
     * 
     **/
    voucherCode: string

}


// Representation of a metadata of an Order Subsequent Document        
interface SAPOrderSubsequentDocumentWsDTO {

    /**
     * Document Id
     * 
     **/
    sapDocumentId: string
    ,

    /**
     * UI Name for the column with ID's of the Document Entries
     * 
     **/
    sapDocumentEntryIdColumnName: string
    ,

    /**
     * 
     * 
     **/
    sapSubsequentDocuments: SAPOrderSubsequentDocumentWsDTO[]
    ,

    /**
     * Creation Date/Time
     * 
     **/
    sapCreatedAt: string
    ,

    /**
     * Name of the status of the document
     * 
     **/
    sapStatus: string
    ,

    /**
     * UI Name for the column with ID's of the Document Entries
     * 
     **/
    sapDocumentCategory: string

}


// Representation of a metadata of an Order Subsequent Document Entry        
interface SAPOrderSubsequentDocumentEntryWsDTO {

    /**
     * Subsequent Document Entry Number
     * 
     **/
    sapSubsequentDocumentEntryNumber: string
    ,

    /**
     * Order Entry Number
     * 
     **/
    sapOrderEntryNumber: string
    ,

    /**
     * Creation Date/Time
     * 
     **/
    sapCreatedAt: string
    ,

    /**
     * Name of the Status of the Document
     * 
     **/
    sapStatus: string

}


// 
interface PriceWsDTOType {

}


// 
interface ImageWsDTOType {

}


// 
interface AccuracyWsDTOType {

}


// 
interface ReturnRequestStatusWsDTOType {

}


// 
interface CaptchaProviderWsDtoType {

}


// 
interface CaptchaVersionWsDtoType {

}


// 
interface VerificationPurposeWsDTOType {

}
