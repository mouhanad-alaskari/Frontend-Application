import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { RoutesList }  from './RoutesList';

export default function Routes() {
    return (
        <Suspense>
            <Switch>
                {RoutesList.map((RouteObj, index) => {
                    return <Route key={index} {...RouteObj} />;
                })}
            </Switch>
        </Suspense>
    )
}
