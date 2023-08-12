import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchProduct.scss";

export default function SearchProduct() {
  return (
    <>
      <div className="product-main-search">
        {/* {this.state.textTimKiem && (
            <h4>Bạn vừa tìm kiếm sản phẩm: {this.state.textTimKiem}</h4>
          )} */}
        <h4>Ngài vừa tìm kiếm sản phẩm :</h4>
        <div className="main-search">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Nhập tên sản phẩm ..."
            //   onChange={(event) => this.handleOnChangeName(event)}
            //   value={this.state.name}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.searchProduct()}
          >
            <i>
              <FaSearch />
            </i>
          </button>
        </div>
      </div>
      <div className="product-main-search">
        <div className="main-filter">
          <p className="filter-product">Lọc theo danh mục:</p>
          <select
            className="select-product"
            //   onChange={(event) => this.handleOnChangeInput(event)}
            //   onClick={(event) => this.timKiemTheoDanhMuc(event)}
          >
            <option>ALL</option>

            {/* {this.state.listCategory &&
                this.state.listCategory.map((item, index) => {
                  return (
                    <>
                      <option key={item.id} value={item.id_category}>
                        {item.name}
                      </option>
                    </>
                  );
                })} */}
            {/* <input onChange={(event) => this.handleOnChangeInput(event, 'id_category')} value={item.id_category} hidden></input> */}
          </select>
        </div>
      </div>
    </>
  );
}
