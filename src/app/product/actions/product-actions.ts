import { Taxonomy } from './../../core/models/taxonomy';
import { Product } from './../../core/models/product';
import { Action } from '@ngrx/store';

export class ProductActions {
  static GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
  static GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
  static GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
  static GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS';
  static CLEAR_SELECTED_PRODUCT = 'CLEAR_SELECTED_PRODUCT';
  static GET_ALL_TAXONOMIES = 'GET_ALL_TAXONOMIES';
  static GET_ALL_TAXONOMIES_SUCCESS = 'GET_ALL_TAXONOMIES_SUCCESS';
  static GET_ALL_PRODUCTS_SEARCH_SUCCESS = 'GET_ALL_PRODUCTS_SEARCH_SUCCESS';
  static GET_RELETED_PRODUCT = 'GET_RELETED_PRODUCT';
  static GET_RELETED_PRODUCT_SUCCESS = 'GET_RELETED_PRODUCT_SUCCESS';
  static GET_REVIEWS = 'GET_REVIEWS'
  static GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS'

  getAllProducts(pageNumber = 1) {
    return {
      type: ProductActions.GET_ALL_PRODUCTS,
      payload: pageNumber
    };
  }

  getProductDetail(id: string) {
    return {
      type: ProductActions.GET_PRODUCT_DETAIL,
      payload: id
    };
  }

  // change products type to Product[]
  getAllProductsSuccess(products: any) {
    return {
      type: ProductActions.GET_ALL_PRODUCTS_SUCCESS,
      payload: products
    };
  }

  getProductDetailSuccess(product: Product) {
    return {
      type: ProductActions.GET_PRODUCT_DETAIL_SUCCESS,
      payload: product
    };
  }

  clearSelectedProduct() {
    return { type: ProductActions.CLEAR_SELECTED_PRODUCT };
  }

  getAllTaxonomies() {
    return { type: ProductActions.GET_ALL_TAXONOMIES };
  }

  getAllTaxonomiesSuccess(taxonomies: any) {
    return {
      type: ProductActions.GET_ALL_TAXONOMIES_SUCCESS,
      payload: taxonomies
    };
  }

  getRelatedProduct(product_id: any) {
    return {
      type: ProductActions.GET_RELETED_PRODUCT,
      payload: product_id
    }
  }

  getRelatedProductSuccess(products: any) {
    return {
      type: ProductActions.GET_RELETED_PRODUCT_SUCCESS,
      payload: products
    }
  }

  getProductReviews(product_id: any) {
    return {
      type: ProductActions.GET_REVIEWS,
      payload: product_id
    }
  }

  getProductReviewsSuccess(reviews: any) {
    return {
      type: ProductActions.GET_REVIEWS_SUCCESS,
      payload: reviews
    }
  }
}
