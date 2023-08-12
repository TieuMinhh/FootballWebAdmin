import React, { useState, useEffect } from "react";
import "./Revenue.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export default function Revenue() {
  const [list, setList] = useState([]);
  const [change, setChange] = useState([]);
  async function getListRevenue() {
    // const result = await axiosApiInstance.get(
    //   axiosApiInstance.defaults.baseURL + "/api/v1/hero/get"
    // );
    const result = await axios.get(
      `http://localhost:8081/api/v1/admin/doanhso`
    );
    setList(result?.data.listDoanhSo);
    // console.log(result.data);
  }

  useEffect(() => {
    getListRevenue();
  }, [change]);

  return (
    <div className="revenue-main-container">
      <div className="d-flex justify-content-center revenue-title">
        Thống kê doanh thu
      </div>
      <div className="table-revenue">
        <table id="main-revenue">
          <tbody>
            <tr>
              <th>STT</th>

              <th>Thời gian thống kê</th>
              <th>Doanh số</th>
              <th>Chi tiết</th>
            </tr>

            {/* <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>

              <td>01/07/2023</td>
              <td>3.500.000 đ</td>
              <td>
                <Link to="/revenue-day" className="detail-revenue">
                  Xem chi tiết
                </Link>
              </td>
            </tr> */}

            {list &&
              list.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{moment(item.ngay).format("LLLL")}</td>
                    <td>
                      {Number(item.total_doanhso).toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}{" "}
                    </td>
                    <td>
                      <Link to="/revenue-day" className="detail-revenue">
                        Xem chi tiết
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
