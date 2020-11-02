import {
    TRANSACTION_DEPOSIT_REQUEST,
    TRANSACTION_DEPOSIT_SUCCESS,
    TRANSACTION_DEPOSIT_FAIL,
    TRANSACTION_DEPOSIT_RESET,
    TRANSACTION_WITHDRAWAL_REQUEST,
    TRANSACTION_WITHDRAWAL_SUCCESS,
    TRANSACTION_WITHDRAWAL_FAIL,
    TRANSACTION_WITHDRAWAL_RESET,
    TRANSACTION_TRANSFER_REQUEST,
    TRANSACTION_TRANSFER_SUCCESS,
    TRANSACTION_TRANSFER_FAIL,
    TRANSACTION_TRANSFER_RESET,
    TRANSACTION_SALDO_REQUEST,
    TRANSACTION_SALDO_SUCCESS,
    TRANSACTION_SALDO_FAIL,
  } from "../constants/transactionConstants";
  
  export const transactionDepositReducer = (state = {}, action) => {
    switch (action.type) {
      case TRANSACTION_DEPOSIT_REQUEST:
        return { loading: true };
      case TRANSACTION_DEPOSIT_SUCCESS:
        return { loading: false, success:true, transaction: action.payload };
      case TRANSACTION_DEPOSIT_FAIL:
        return { loading: false, error: action.payload };
      case TRANSACTION_DEPOSIT_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const transactionWithdrawalReducer = (state = {}, action) => {
    switch (action.type) {
      case TRANSACTION_WITHDRAWAL_REQUEST:
        return { loading: true };
      case TRANSACTION_WITHDRAWAL_SUCCESS:
        return { loading: false, success:true, transaction: action.payload };
      case TRANSACTION_WITHDRAWAL_FAIL:
        return { loading: false, error: action.payload };
      case TRANSACTION_WITHDRAWAL_RESET:
        return {};
      default:
        return state;
    }
  };

  export const transactionTransferReducer = (state = {}, action) => {
    switch (action.type) {
      case TRANSACTION_TRANSFER_REQUEST:
        return { loading: true };
      case TRANSACTION_TRANSFER_SUCCESS:
        return { loading: false, success:true, transaction: action.payload };
      case TRANSACTION_TRANSFER_FAIL:
        return { loading: false, error: action.payload };
      case TRANSACTION_TRANSFER_RESET:
        return {};
      default:
        return state;
    }
  };

  export const transactionSaldoReducer = (state = { saldoTotal: {} }, action) => {
    switch (action.type) {
      case TRANSACTION_SALDO_REQUEST:
        return {
          loading: true,
        }
      case TRANSACTION_SALDO_SUCCESS:
        return {
          loading: false,
          saldoTotal: action.payload,
        }
      case TRANSACTION_SALDO_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }
  