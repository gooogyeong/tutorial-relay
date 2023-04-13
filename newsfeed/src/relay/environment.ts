import {
  Store,
  RecordSource,
  Environment,
  Network,
  Observable,
} from "relay-runtime";
import type { FetchFunction, IEnvironment } from "relay-runtime";

const fetchFn: FetchFunction = (params, variables) => {
  console.log('params', params)
  const response = fetch("/api", {
    method: "POST",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify({
      // query: params.text,
      queryId: params.id,
      variables,
    }),
  });

  return Observable.from(response.then((data) => data.json()));
};

export function createEnvironment(): IEnvironment {
  const network = Network.create(fetchFn);
  const store = new Store(new RecordSource());
  return new Environment({ store, network });
}
