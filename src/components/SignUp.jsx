// import React from 'react'
import '../assets/css/carttest.css'
import Footer from './Footer'
import Header from './Header'
const SignUp = () => {
      return (
        <>
          <Header/> 
  <div className="master-wrapper-content">
    <div className="master-column-wrapper">
      <div className="center-1">
        <div className="breadcrumb">
          <ul>
            <li>
              <a href="./">Trang chủ</a>
            </li>
            <li>
              <span>›</span> <a href="./register">Đăng ký</a>
            </li>
          </ul>
        </div>
        <div className="page registration-page">
          <div className="page-body">
            <div className="customer-blocks">
              <div className="new-wrapper register-block">
                <div className="topic-block">
                  <div className="topic-block-body">
                    <p>
                      <img
                        src="/src/assets/images/TND_M402_010 1.jpeg"
                        alt=""
                        width={793}
                        height={467}
                        />
                    </p>
                  </div>
                </div>
              </div>
              <form
                method="post"
                autoComplete="off"
                action="/register?returnurl=%2F"
                >
                <div className="fieldset">
                  <div className="page-title">
                    <h1>Đăng ký</h1>
                  </div>
                  <div className="form-fields">
                    <div className="inputs first_name">
                      <label htmlFor="ReferralCode">Mã giới thiệu:</label>{" "}
                      <input
                        type="text"
                        id="ReferralCode"
                        name="ReferralCode"
                        />{" "}
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="ReferralCode"
                        data-valmsg-replace="true"
                        />
                    </div>
                    <div className="inputs first_name">
                      <label htmlFor="FirstName">Tên, Họ:</label>{" "}
                      <input
                        type="text"
                        data-val="true"
                        data-val-required="Trường bắt buộc."
                        id="FirstName"
                        name="FirstName"
                        />{" "}
                      <span className="required">*</span>{" "}
                        
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="FirstName"
                        data-valmsg-replace="true"
                      />
                    </div>
                    <div className="inputs gender">
                      <label htmlFor="gender">Giới tính:</label>
                      <div id="gender" className="gender">
                        <span className="male">
                          {" "}
                          <input
                            type="radio"
                            defaultValue="M"
                            id="gender-male"
                            name="Gender"
                          />{" "}
                          <label className="forcheckbox" htmlFor="gender-male">
                            Nam
                          </label>{" "}
                        </span>{" "}
                        <span className="female">
                          {" "}
                          <input
                            type="radio"
                            defaultValue="F"
                            id="gender-female"
                            name="Gender"
                          />{" "}
                          <label
                            className="forcheckbox"
                            htmlFor="gender-female"
                          >
                            Nữ
                          </label>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="inputs date-of-birth">
                      <label>Ngày sinh:</label>
                      <div className="date-picker-wrapper">
                        <select name="DateOfBirthDay">
                          <option value={0}>ngày</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                          <option value={11}>11</option>
                          <option value={12}>12</option>
                          <option value={13}>13</option>
                          <option value={14}>14</option>
                          <option value={15}>15</option>
                          <option value={16}>16</option>
                          <option value={17}>17</option>
                          <option value={18}>18</option>
                          <option value={19}>19</option>
                          <option value={20}>20</option>
                          <option value={21}>21</option>
                          <option value={22}>22</option>
                          <option value={23}>23</option>
                          <option value={24}>24</option>
                          <option value={25}>25</option>
                          <option value={26}>26</option>
                          <option value={27}>27</option>
                          <option value={28}>28</option>
                          <option value={29}>29</option>
                          <option value={30}>30</option>
                          <option value={31}>31</option>
                        </select>
                        <select name="DateOfBirthMonth">
                          <option value={0}>tháng</option>
                          <option value={1}>Tháng Giêng</option>
                          <option value={2}>Tháng Hai</option>
                          <option value={3}>Tháng Ba</option>
                          <option value={4}>Tháng Tư</option>
                          <option value={5}>Tháng Năm</option>
                          <option value={6}>Tháng Sáu</option>
                          <option value={7}>Tháng Bảy</option>
                          <option value={8}>Tháng Tám</option>
                          <option value={9}>Tháng Chín</option>
                          <option value={10}>Tháng Mười</option>
                          <option value={11}>Tháng Mười Một</option>
                          <option value={12}>Tháng Mười Hai</option>
                        </select>
                        <select name="DateOfBirthYear">
                          <option value={0}>Năm</option>
                          <option value={1914}>1914</option>
                          <option value={1915}>1915</option>
                          <option value={1916}>1916</option>
                          <option value={1917}>1917</option>
                          <option value={1918}>1918</option>
                          <option value={1919}>1919</option>
                          <option value={1920}>1920</option>
                          <option value={1921}>1921</option>
                          <option value={1922}>1922</option>
                          <option value={1923}>1923</option>
                          <option value={1924}>1924</option>
                          <option value={1925}>1925</option>
                          <option value={1926}>1926</option>
                          <option value={1927}>1927</option>
                          <option value={1928}>1928</option>
                          <option value={1929}>1929</option>
                          <option value={1930}>1930</option>
                          <option value={1931}>1931</option>
                          <option value={1932}>1932</option>
                          <option value={1933}>1933</option>
                          <option value={1934}>1934</option>
                          <option value={1935}>1935</option>
                          <option value={1936}>1936</option>
                          <option value={1937}>1937</option>
                          <option value={1938}>1938</option>
                          <option value={1939}>1939</option>
                          <option value={1940}>1940</option>
                          <option value={1941}>1941</option>
                          <option value={1942}>1942</option>
                          <option value={1943}>1943</option>
                          <option value={1944}>1944</option>
                          <option value={1945}>1945</option>
                          <option value={1946}>1946</option>
                          <option value={1947}>1947</option>
                          <option value={1948}>1948</option>
                          <option value={1949}>1949</option>
                          <option value={1950}>1950</option>
                          <option value={1951}>1951</option>
                          <option value={1952}>1952</option>
                          <option value={1953}>1953</option>
                          <option value={1954}>1954</option>
                          <option value={1955}>1955</option>
                          <option value={1956}>1956</option>
                          <option value={1957}>1957</option>
                          <option value={1958}>1958</option>
                          <option value={1959}>1959</option>
                          <option value={1960}>1960</option>
                          <option value={1961}>1961</option>
                          <option value={1962}>1962</option>
                          <option value={1963}>1963</option>
                          <option value={1964}>1964</option>
                          <option value={1965}>1965</option>
                          <option value={1966}>1966</option>
                          <option value={1967}>1967</option>
                          <option value={1968}>1968</option>
                          <option value={1969}>1969</option>
                          <option value={1970}>1970</option>
                          <option value={1971}>1971</option>
                          <option value={1972}>1972</option>
                          <option value={1973}>1973</option>
                          <option value={1974}>1974</option>
                          <option value={1975}>1975</option>
                          <option value={1976}>1976</option>
                          <option value={1977}>1977</option>
                          <option value={1978}>1978</option>
                          <option value={1979}>1979</option>
                          <option value={1980}>1980</option>
                          <option value={1981}>1981</option>
                          <option value={1982}>1982</option>
                          <option value={1983}>1983</option>
                          <option value={1984}>1984</option>
                          <option value={1985}>1985</option>
                          <option value={1986}>1986</option>
                          <option value={1987}>1987</option>
                          <option value={1988}>1988</option>
                          <option value={1989}>1989</option>
                          <option value={1990}>1990</option>
                          <option value={1991}>1991</option>
                          <option value={1992}>1992</option>
                          <option value={1993}>1993</option>
                          <option value={1994}>1994</option>
                          <option value={1995}>1995</option>
                          <option value={1996}>1996</option>
                          <option value={1997}>1997</option>
                          <option value={1998}>1998</option>
                          <option value={1999}>1999</option>
                          <option value={2000}>2000</option>
                          <option value={2001}>2001</option>
                          <option value={2002}>2002</option>
                          <option value={2003}>2003</option>
                          <option value={2004}>2004</option>
                          <option value={2005}>2005</option>
                          <option value={2006}>2006</option>
                          <option value={2007}>2007</option>
                          <option value={2008}>2008</option>
                          <option value={2009}>2009</option>
                          <option value={2010}>2010</option>
                          <option value={2011}>2011</option>
                          <option value={2012}>2012</option>
                          <option value={2013}>2013</option>
                          <option value={2014}>2014</option>
                          <option value={2015}>2015</option>
                          <option value={2016}>2016</option>
                          <option value={2017}>2017</option>
                          <option value={2018}>2018</option>
                          <option value={2019}>2019</option>
                          <option value={2020}>2020</option>
                          <option value={2021}>2021</option>
                          <option value={2022}>2022</option>
                          <option value={2023}>2023</option>
                          <option value={2024}>2024</option>
                        </select>
                      </div>
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="DateOfBirthDay"
                        data-valmsg-replace="true"
                      />{" "}
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="DateOfBirthMonth"
                        data-valmsg-replace="true"
                      />{" "}
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="DateOfBirthYear"
                        data-valmsg-replace="true"
                      />
                    </div>
                    <div className="inputs">
                      <label htmlFor="Email">E-mail:</label>{" "}
                      <input
                        type="email"
                        data-val="true"
                        data-val-email="Email sai"
                        data-val-required="Trường bắt buộc."
                        id="Email"
                        name="Email"
                      />{" "}
                      <span className="required">*</span>{" "}
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="Email"
                        data-valmsg-replace="true"
                      />
                    </div>
                    <div className="inputs">
                      <label htmlFor="Phone">Điện thoại:</label>{" "}
                      <input
                        type="tel"
                        data-val="true"
                        data-val-required="Trường bắt buộc."
                        id="Phone"
                        name="Phone"
                      />{" "}
                      <span className="required">*</span>{" "}
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="Phone"
                        data-valmsg-replace="true"
                      />
                    </div>
                    <div className="inputs">
                      <label htmlFor="Username">Username:</label>{" "}
                      <input
                        type="text"
                        data-val="true"
                        data-val-required="Tên người dùng là bắt buộc."
                        id="Username"
                        name="Username"
                      />{" "}
                      <span className="required">*</span>{" "}
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="Username"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="fieldset">
                  <div className="form-fields">
                    <div className="inputs">
                      <label htmlFor="Password">Mật khẩu:</label>{" "}
                      <input
                        type="password"
                        data-val="true"
                        data-val-regex="<p>phải đáp ứng các quy tắc sau: </p><ul><li>phải có ít nhất 8 ký tự</li><li>Phải có ít nhất 8 ký tự trong đó có đặc biệt (ví dụ: #?!@$%^&*-)</li></ul>"
                        data-val-regex-pattern="^(?=.*?[#?!@$%^&*-]).{8,}$"
                        data-val-required="Yêu cầu mật khẩu."
                        id="Password"
                        name="Password"
                      />{" "}
                      <span className="required">*</span>{" "}
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="Password"
                        data-valmsg-replace="true"
                      />
                    </div>
                    <label className="luu_y">
                      {" "}
                      Lưu ý: Mật khẩu phải có tối thiểu 8 ký tự bao gồm chữ, số
                      và các ký tự đặc biệt{" "}
                    </label>
                    <div className="inputs">
                      <label htmlFor="ConfirmPassword">
                        Xác nhận mật khẩu:
                      </label>{" "}
                      <input
                        type="password"
                        data-val="true"
                        data-val-equalto="Mật khẩu và mật khẩu xác nhận không khớp."
                        data-val-equalto-other="*.Password"
                        data-val-required="Yêu cầu mật khẩu."
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                      />{" "}
                      <span className="required">*</span>{" "}
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="ConfirmPassword"
                        data-valmsg-replace="true"
                      />
                    </div>
                    <div className="captcha-box">
                      <div id="captcha_790396717">
                        <div style={{ width: 304, height: 78 }}>
                          <div>
                            <iframe
                              title="reCAPTCHA"
                              width={304}
                              height={78}
                              role="presentation"
                              name="a-hsp203gp8a0r"
                              frameBorder={0}
                              scrolling="no"
                              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                              src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcXUmEkAAAAAKzfE5n-_q9I4ojdMDPuf0M1_peS&co=aHR0cHM6Ly9zaG9wZHVuay5jb206NDQz&hl=vi&v=rKbTvxTxwcw5VqzrtN-ICwWt&theme=light&size=normal&cb=egefp9qtofx3"
                            />
                          </div>
                          <textarea
                            id="g-recaptcha-response"
                            name="g-recaptcha-response"
                            className="g-recaptcha-response"
                            style={{
                              width: 250,
                              height: 40,
                              border: "1px solid rgb(193, 193, 193)",
                              margin: "10px 25px",
                              padding: 0,
                              resize: "none",
                              display: "none"
                            }}
                            defaultValue={""}
                          />
                        </div>
                        <iframe style={{ display: "none" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <button
                    type="submit"
                    name="register-button"
                    id="register-button"
                    className="button-1 register-next-step-button"
                  >
                    Đăng ký
                  </button>
                </div>
                <div className="buttons-forgot">
                  <label> Bạn đã có tài khoản? </label>{" "}
                  <a href="/login" className="link_access">
                    đăng nhập ngay
                  </a>
                </div>
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  defaultValue="CfDJ8B_7kU2sHThPnwTNz0FdOwVrbi263yPYcq1OD81Moh0Pq71DynJKzek9qT9nsylX5TVAkX4vy_70eSPiFmfXlTYVh51OGZ5KDSxFm4BIx1xMNgwqYrs1Q-Xp3wkziLUuILashuLv6KZ-UFiNBDGDZOM"
                />
              </form>
              <div className="external-authentication" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sd-chat-box" />
    <div className="chat-box_toggle" />
    <section className="all_chat-box" id="contact1" style={{ display: "none" }}>
      <div className="all_items-chat-box">
        <a
          className="items-chat-icon ic_zalo"
          href="https://zalo.me/3937868610324741136"
          target="_blank"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={36}
            height={13}
            viewBox="0 0 36 13"
            fill="none"
          >
            <path
              d="M18.6343 3.93038V3.24788H20.5901V12.8362H19.4721C19.2508 12.8367 19.0384 12.7454 18.8813 12.5825C18.7243 12.4196 18.6355 12.1984 18.6343 11.9672V11.9687C17.818 12.593 16.8322 12.9288 15.8205 12.9272C14.5565 12.9272 13.3441 12.4029 12.45 11.4695C11.5559 10.5361 11.0532 9.27 11.0525 7.94955C11.0532 6.6291 11.5559 5.36301 12.45 4.4296C13.3441 3.49619 14.5565 2.97185 15.8205 2.97185C16.8317 2.97066 17.8169 3.30644 18.6329 3.93038H18.6343ZM10.5458 0.166016V0.476932C10.5458 1.0563 10.4717 1.5295 10.1102 2.0846L10.0666 2.13617C9.94618 2.27726 9.82903 2.42139 9.71527 2.56841L3.43866 10.7978H10.5458V11.9626C10.5458 12.0775 10.5241 12.1912 10.482 12.2973C10.4398 12.4034 10.3781 12.4998 10.3003 12.5809C10.2225 12.6621 10.1301 12.7264 10.0285 12.7702C9.92686 12.814 9.81795 12.8364 9.70801 12.8362H0.5V12.2872C0.5 11.6153 0.65971 11.315 0.862977 11.0026L7.55192 2.35001H0.778767V0.166016H10.5472H10.5458ZM22.961 12.8362C22.7762 12.8362 22.5989 12.7595 22.4682 12.623C22.3375 12.4865 22.2641 12.3013 22.2641 12.1082V0.166016H24.3563V12.8362H22.961ZM30.5444 2.91118C31.1747 2.91098 31.7989 3.04048 32.3813 3.29228C32.9638 3.54408 33.493 3.91324 33.9389 4.37871C34.3848 4.84417 34.7385 5.39681 34.9799 6.00507C35.2213 6.61333 35.3456 7.2653 35.3458 7.92377C35.346 8.58223 35.222 9.23428 34.981 9.84269C34.7399 10.4511 34.3865 11.004 33.941 11.4697C33.4954 11.9355 32.9663 12.305 32.384 12.5571C31.8017 12.8093 31.1776 12.9392 30.5473 12.9394C29.2742 12.9398 28.0532 12.4119 27.1527 11.4719C26.2523 10.5318 25.7462 9.25662 25.7458 7.9268C25.7454 6.59698 26.2508 5.32146 27.1507 4.38085C28.0506 3.44024 29.2713 2.91159 30.5444 2.91118ZM15.822 10.8782C16.1956 10.8871 16.5672 10.8179 16.9149 10.6747C17.2626 10.5315 17.5794 10.3171 17.8466 10.0442C18.1139 9.77129 18.3262 9.44535 18.4712 9.08551C18.6162 8.72567 18.6909 8.3392 18.6909 7.94879C18.6909 7.55838 18.6162 7.17191 18.4712 6.81207C18.3262 6.45224 18.1139 6.12629 17.8466 5.85339C17.5794 5.58049 17.2626 5.36613 16.9149 5.2229C16.5672 5.07967 16.1956 5.01047 15.822 5.01935C15.0893 5.03677 14.3922 5.35305 13.8799 5.90053C13.3676 6.44801 13.0807 7.1832 13.0807 7.94879C13.0807 8.71438 13.3676 9.44957 13.8799 9.99705C14.3922 10.5445 15.0893 10.8608 15.822 10.8782ZM30.5444 10.8737C31.2933 10.8737 32.0116 10.5629 32.5412 10.0097C33.0708 9.45646 33.3683 8.70613 33.3683 7.92377C33.3683 7.1414 33.0708 6.39108 32.5412 5.83786C32.0116 5.28464 31.2933 4.97385 30.5444 4.97385C29.7954 4.97385 29.0771 5.28464 28.5475 5.83786C28.0179 6.39108 27.7204 7.1414 27.7204 7.92377C27.7204 8.70613 28.0179 9.45646 28.5475 10.0097C29.0771 10.5629 29.7954 10.8737 30.5444 10.8737Z"
              fill="#2288FF"
            />
          </svg>{" "}
        </a>{" "}
        <a className="items-chat-icon ic_tel" href="tel:19006626">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.68715 17.2624C7.88236 18.4658 9.14893 19.5533 10.4868 20.525C11.8248 21.4878 13.1627 22.2499 14.5006 22.8115C15.8474 23.3821 17.1229 23.6673 18.3271 23.6673C19.1566 23.6673 19.9236 23.5202 20.6283 23.2261C21.3329 22.9319 21.9751 22.4728 22.5549 21.8488C22.876 21.4833 23.1391 21.0866 23.3443 20.6587C23.5583 20.2308 23.6654 19.8029 23.6654 19.3751C23.6654 19.072 23.5985 18.7778 23.4647 18.4925C23.3398 18.1984 23.1257 17.9488 22.8225 17.7437L18.9291 15.0026C18.6526 14.7975 18.3895 14.6504 18.1398 14.5613C17.8989 14.4632 17.6626 14.4142 17.4307 14.4142C17.1542 14.4142 16.8776 14.49 16.6011 14.6415C16.3336 14.7931 16.0571 15.0115 15.7716 15.2967L14.8618 16.1793C14.7281 16.313 14.5675 16.3798 14.3802 16.3798C14.2821 16.3798 14.1884 16.3665 14.0992 16.3397C14.019 16.3041 13.9431 16.2729 13.8718 16.2461C13.4882 16.0411 12.9888 15.6845 12.3733 15.1764C11.7579 14.6683 11.1335 14.0978 10.5002 13.4648C9.86694 12.8319 9.29164 12.2079 8.77431 11.5928C8.2659 10.9688 7.91358 10.4652 7.71735 10.0818C7.68167 10.0105 7.65046 9.93475 7.6237 9.85452C7.59694 9.77429 7.58356 9.68515 7.58356 9.58709C7.58356 9.4088 7.646 9.25726 7.77087 9.13246L8.66728 8.20982C8.9527 7.90673 9.17123 7.62147 9.32286 7.35404C9.47449 7.08661 9.5503 6.80581 9.5503 6.51163C9.5503 6.28878 9.49679 6.057 9.38975 5.81631C9.29164 5.56671 9.14447 5.29928 8.94824 5.01402L6.25902 1.21651C6.03603 0.913418 5.77291 0.690559 5.46965 0.547929C5.16638 0.405299 4.84528 0.333984 4.50634 0.333984C3.65007 0.333984 2.84286 0.699473 2.08471 1.43045C1.47818 2.0188 1.03221 2.674 0.746787 3.39607C0.470283 4.10922 0.332031 4.86694 0.332031 5.66923C0.332031 6.87267 0.608535 8.14296 1.16154 9.48012C1.72347 10.8173 2.48162 12.15 3.43601 13.4782C4.39931 14.8064 5.48302 16.0678 6.68715 17.2624Z"
              fill="#339901"
            />
          </svg>{" "}
        </a>{" "}
        <a
          className="items-chat-icon ic_mess"
          href="https://m.me/shopdunk.store"
          target="_blank"
        >
          {" "}
          <img
            src="/images/uploaded-source/icon/ic_messenger.png"
            width={28}
            height={28}
          />{" "}
        </a>
      </div>
    </section>
    <a id="backTop" className="btn btn-back-top bg-teal" />
    <div className="hidden-lg hidden-md bottom" style={{ display: "none" }}>
      <ul>
        <li>
          <a href="/">
            {" "}
            <img
              src="/images/uploaded-source/icon/IC_home.png"
              width={22}
              height={22}
            />{" "}
            <span>Trang chủ</span>{" "}
          </a>
        </li>
        <li>
          <a href="/flash-sale" id="procat">
            {" "}
            <img
              src="/images/uploaded-source/icon/bottom-flash-sale.png"
              width={22}
              height={22}
            />{" "}
            <span>Flash Sale</span>{" "}
          </a>
        </li>
        <li>
          <a alt="Hệ thống cửa hàng" href="/find-store">
            {" "}
            <img
              src="/images/uploaded-source/icon/Shop.png"
              width={22}
              height={22}
            />{" "}
            <span>Cửa hàng</span>{" "}
          </a>
        </li>
        <li>
          <a href="/tin-tuc">
            {" "}
            <img
              style={{ height: 22 }}
              src="/images/uploaded-source/icon/News.png"
              width={22}
              height={22}
            />{" "}
            <span>Tin tức</span>{" "}
          </a>
        </li>
        <li>
          <a href="/care">
            {" "}
            <img
              style={{ height: 22 }}
              src="/images/uploaded-source/icon/fixed.png"
              width={22}
              height={22}
            />{" "}
            <span>
              Bảo hành
              <br />
              Apple
            </span>{" "}
          </a>
        </li>
      </ul>
    </div>
  </div>
  <Footer/>  
  </>
  )
}

export default SignUp