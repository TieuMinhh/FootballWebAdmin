import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchCategory.scss";

export default function SearchCategory() {
  return (
    <div className="category-main-search">
      <div className="main-search">
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Nhập tên danh mục ..."
          // onChange={(event) => this.handleOnChangeName(event)}
          // value={this.state.name}
        />
        <button
          type="button"
          className="btn btn-success"
          // onClick={() => this.searchCategory()}
        >
          <i className="icon-search">
            <FaSearch />
          </i>
        </button>
      </div>
    </div>
  );
}
