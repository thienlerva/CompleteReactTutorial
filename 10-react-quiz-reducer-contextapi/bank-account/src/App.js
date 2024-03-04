import "./App.css";
import { useReducer, useRef } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "open") return state;

  switch (action.type) {
    case "open":
      return {
        ...state,
        balance: 500,
        isActive: !state.isActive ? true : false,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "withdraw":
      return {
        ...state,
        balance:
          state.balance >= action.payload
            ? state.balance - action.payload
            : state.balance,
      };
    case "loan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };
    case "pay":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
      };
    case "close":
      if (state.loan > 0 || state.balance !== 0) return state;
      return initialState;
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const depositAmount = useRef(0);

  function handleDepositSubmit(e) {
    e.preventDefault();

    let value = depositAmount.current.value;

    dispatch({ type: "deposit", payload: Number(value) });
  }

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button onClick={() => dispatch({ type: "open" })} disabled={isActive}>
          Open account
        </button>
      </p>
      <form
        onSubmit={handleDepositSubmit}
        style={{
          display: "flex",
          gap: "10px",
          width: "200px",
          margin: "5px auto",
        }}
      >
        <input type="text" ref={depositAmount} style={{ width: "100" }}></input>
        {/* <button
          onClick={() => dispatch({ type: "deposit", payload: 150 })}
          disabled={!isActive}
        >
          Deposit 150
        </button> */}
        <button disabled={!isActive}>Deposit</button>
      </form>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "loan", payload: 5000 })}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "pay", payload: 5000 })}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "close" })}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}

export default App;
