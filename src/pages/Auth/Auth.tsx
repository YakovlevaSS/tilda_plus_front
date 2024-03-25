/* eslint-disable jsx-a11y/label-has-associated-control */
import { useNavigate } from 'react-router-dom';

import './Auth.css';


const Auth = () => {
  const navigate = useNavigate();

  return (
    <form action="#" className="form-add-login">
      <img
        alt="logo"
        className="form-add-login__img"
        src="img/Logo.png"
      />
      <h2 className="form-add-login__title">
        Войдите или зарегистрируйтесь
      </h2>
      <div className="form-add-login-container">
        <label className="form-add-login__label" htmlFor="email">
          <svg
            fill="none"
            height={ 25 }
            viewBox="0 0 24 25"
            width={ 24 }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 4.5H5C4.20435 4.5 3.44129 4.81607 2.87868 5.37868C2.31607 5.94129 2 6.70435 2 7.5V17.5C2 18.2956 2.31607 19.0587 2.87868 19.6213C3.44129 20.1839 4.20435 20.5 5 20.5H19C19.7956 20.5 20.5587 20.1839 21.1213 19.6213C21.6839 19.0587 22 18.2956 22 17.5V7.5C22 6.70435 21.6839 5.94129 21.1213 5.37868C20.5587 4.81607 19.7956 4.5 19 4.5ZM18.59 6.5L12.71 12.38C12.617 12.4737 12.5064 12.5481 12.3846 12.5989C12.2627 12.6497 12.132 12.6758 12 12.6758C11.868 12.6758 11.7373 12.6497 11.6154 12.5989C11.4936 12.5481 11.383 12.4737 11.29 12.38L5.41 6.5H18.59ZM20 17.5C20 17.7652 19.8946 18.0196 19.7071 18.2071C19.5196 18.3946 19.2652 18.5 19 18.5H5C4.73478 18.5 4.48043 18.3946 4.29289 18.2071C4.10536 18.0196 4 17.7652 4 17.5V7.91L9.88 13.79C10.4425 14.3518 11.205 14.6674 12 14.6674C12.795 14.6674 13.5575 14.3518 14.12 13.79L20 7.91V17.5Z"
              fill="black"
            />
          </svg>
          <input
            className="form-add-login__input"
            placeholder="Укажите эл.почту"
            type="email"
          />
        </label>
      </div>
      <button
        className="form-add-login__button"
        type="button"
        onClick={ () => navigate('/signin') }
      >
        Продолжить
        <svg
          fill="none"
          height={ 25 }
          viewBox="0 0 24 25"
          width={ 24 }
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M12.7402 5.79583C13.1291 5.40369 13.7622 5.40107 14.1544 5.78997L20.2042 11.7899C20.3935 11.9776 20.5 12.2332 20.5 12.4999C20.5 12.7665 20.3935 13.0221 20.2042 13.2099L14.1544 19.21C13.7623 19.5989 13.1291 19.5963 12.7402 19.2042C12.3513 18.8121 12.3539 18.1789 12.746 17.79L17.0716 13.4999H4.5C3.94772 13.4999 3.5 13.0522 3.5 12.4999C3.5 11.9476 3.94772 11.4999 4.5 11.4999H17.0716L12.746 7.21003C12.3539 6.82113 12.3513 6.18797 12.7402 5.79583Z"
            fill="black"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

export default Auth;
