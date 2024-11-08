import request from "../app/interfaces/request.models";

type applicantTrackerBCP = {
  POST_APPLICATION: request;
  GET_VACANTS: request;
};

const applicantTrackerRequest: applicantTrackerBCP = {
  POST_APPLICATION: {
    method: "POST",
    url: "/Applicants",
    data: null,
    params: null,
  },
  GET_VACANTS: {
    method: "POST",
    url: "/Vacancies",
    data: null,
    params: null,
  },
};

export { applicantTrackerRequest };