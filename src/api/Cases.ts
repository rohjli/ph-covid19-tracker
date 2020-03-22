import API from "./API";

interface CaseResultValue {
  case_no: number;
  date: Date | string;
  age: number;
  gender: string;
  nationality: string;
  hospital_admitted_to: string;
  had_recent_travel_history_abroad: string;
  status: string;
  other_information: string;
}

interface SuspectedResultValue {
  confirmed_cases: number;
  cases_tested_negative: number;
  cases_pending_test_results: number;
}

interface PUIResultValue {
  region: string;
  current_pui_status: {
    suspected_cases: {
      admitted: number;
      deaths: number;
    };

    confirmed_cases: {
      admitted: number;
      recoveries: number;
      death: number;
    };
  };
  total: number;
}

export default class Cases extends API {
  async all() {
    const results = await this.get("cases");

    return {
      count: results.length,
      results: results.map((result: CaseResultValue) => ({
        caseNo: result.case_no,
        date: result.date !== "For Validation" ? new Date(result.date) : null,
        age: result.age,
        gender: result.gender,
        nationality: result.nationality,
        admittedHospital: result.hospital_admitted_to,
        hasTravelledAbroad: result.had_recent_travel_history_abroad === "Yes",
        status: result.status,
        otherInfo: result.other_information
      }))
    };
  }

  async tests() {
    const result: SuspectedResultValue = await this.get("test-results");

    return {
      confirmed: result.confirmed_cases,
      negative: result.cases_tested_negative,
      pending: result.cases_pending_test_results
    };
  }

  async pui() {
    const results = await this.get("patients-under-investigation");
    const count: number = results.reduce((acc: any, cur: { total: number }) => {
      return acc + cur.total;
    });

    return {
      count,
      results: results.map((result: PUIResultValue) => {
        const {
          current_pui_status: { suspected_cases, confirmed_cases }
        } = result;

        return {
          region: result.region,
          suspected: suspected_cases,
          confirmed: confirmed_cases
        };
      })
    };
  }
}
