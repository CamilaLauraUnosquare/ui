import { takeEvery, put, all, call } from "redux-saga/effects";
import errorAdapter from "../../adapters/error.adapter";
import {
  getInvoicesStart,
  getInvoicesSuccess,
  postInvoicingVerificationFail,
  postInvoicingVerificationStart,
  postInvoicingVerificationSuccess,
} from "../reducer/";
// import {
//   LibelulaVsSiat,
//   getInvoicesRequest,
//   invoicesReportResponse,
//   invoicingVerificationInput,
//   invoicingVerificationInputAB,
//   invoicingVerificationOutput,
// } from "../../adapters/invoicing.adapater";
import {
  getInvoices,
  postInvoicingVerificationABService,
  postInvoicingVerificationService,
} from "../../services/invoicingVerification.service";
import {
  postInvoicingVerificationABFail,
  postInvoicingVerificationABStart,
  postInvoicingVerificationABSuccess,
} from "../reducer/invoicingVerificationAB";
type responseType = {
  data: string | Array<any> | any;
  errors: any[];
  status: number;
};
function* handleErrors(error: any, failReducer: any) {
  yield put(failReducer(errorAdapter(error)));
}

function* StartPostInvoicingVerification({ payload }: any) {
  try {
    const adaptedData = invoicingVerificationOutput(payload);
    const response: responseType = yield call(() =>
      postInvoicingVerificationService(adaptedData)
    );
    const isSuccessful = response.status === 201;
    const invoicingVerification = invoicingVerificationInput(response.data);
    yield put(
      postInvoicingVerificationSuccess({
        invoicingVerification,
        isSuccessful: isSuccessful,
      })
    );
  } catch (error) {
    yield handleErrors(error, postInvoicingVerificationFail);
  }
}

function* StartPostInvoicingVerificationAB({ payload }: any) {
  try {
    const adaptedData = LibelulaVsSiat(payload);
    const response: responseType = yield call(() =>
      postInvoicingVerificationABService(adaptedData)
    );
    const isSuccessful = response.status === 201;
    const invoicingVerificationAB = invoicingVerificationInputAB(response.data);
    yield put(
      postInvoicingVerificationABSuccess({
        invoicingVerificationAB,
        isSuccessful: isSuccessful,
      })
    );
  } catch (error) {
    yield handleErrors(error, postInvoicingVerificationABFail);
  }
}

function* StartGetInvoices({ payload }: any) {
  try {
    const request = getInvoicesRequest(payload);
    const response: responseType = yield call(() => getInvoices(request));
    const isSuccessful = response.status === 200;
    const reportInvoices = invoicesReportResponse(response.data);
    yield put(
      getInvoicesSuccess({
        reportInvoices,
        isSuccessful,
      })
    );
  } catch (error) {}
}

function* rootSaga(): any {
  yield all([
    yield takeEvery(
      postInvoicingVerificationStart.type,
      StartPostInvoicingVerification
    ),
  ]);
  yield all([
    yield takeEvery(
      postInvoicingVerificationABStart.type,
      StartPostInvoicingVerificationAB
    ),
  ]);
  yield all([yield takeEvery(getInvoicesStart.type, StartGetInvoices)]);
}
export default rootSaga;
