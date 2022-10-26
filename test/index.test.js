/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-env mocha */
import assert from 'assert';
import { Request } from '@adobe/fetch';
import { main } from '../src/index.js';

describe('Index Tests', () => {
  it('invokes index without payload', async () => {
    const result = await main(new Request('https://localhost/'), {
      invocation: {
        event: {},
      },
      env: {},
    });
    assert.strictEqual(result.status, 204);
  });

  it('invokes index with payload', async () => {
    const payload = 'H4sIAAFPWWMAA92WS2/bMAzH7/0UQc51QlKiROVWYGmxw7ZDe1pTFIqtpAYSJ7OdNkPR7z45rz62AgnaDth8ksCHqD9/oHx/1Ipfexqqyo/Dxc95aPda7U8nFyfXX/rn5ydn/fbx2mV2V4SyMSKKVmwMoXZb42Q2Pitni3lj7/q7qjvx02Hmuzdhki+TKpS3eRqqJMmLLCxjmsew87oMftrEERB1EbrE3Utj1JVYG0ZG+5DZVLMBMZkGj1kw6LWk6TZJtRhWaZnP63xWnOaTOpRVTHe5Mq4cNocmTx3bK/PVYx3921DUzwPvd6t1mqypUlk0IgrYoGU2UQjUBqyQdUhaIWpCg+IAxLHRwspFM2yV2mWr86h57aeNZGiMsSAA7IRe+G06sxUoQUiIL1D3yPQ0d2LA90GN3mvnCJPUDSXRgGniRsonIyInzg+FgQf156+n3wZ1Oit9vG++7LVGk0V1kxfjFrbmociaVRl+LGJdVafTGRQvaw7LuvRpHbLTPEyyRqznEq2dGiGbct963CrbxuF6Lf4+9/xTlqdivypj+1ncw273cLwvEUopcSJMyoJiIGTWAmgF2ZEWJEUKrRW2ELd7EWGA1SFEmA4wvgMR8FuLWtmsCB8Ixd4n/j0u1mK+lQvTdFwp5Dg4kYUYnVgyBhxqceSs5mZSRHBiuzXqfbjAmEsO4IKxEwMiF5lFZ0MKCXqkqJTNElGpTtg3I8t7TjX8D5Nin3seTsRGxrcT4WKflbEkBBxfiPi6WbSKHVojSki0Fgsa4jMYzS/RfYUI4gOJILbvQMS/NSk+jItGzFe5WP9sHD0c/QIdNIXebwkAAA==';
    const result = await main(new Request('https://localhost/'), {
      invocation: {
        event: {
          awslogs: {
            data: payload,
          },
        },
      },
      env: {
        CORALOGIX_API_KEY: 'foo',
      },
    });
    assert.strictEqual(result.status, 204);
  });
});
