import * as urlExists from 'url-exists';

import { githubUrl, twitterUrl, websiteUrl } from './urls';

describe("url constants", () => {
    it("should point to a valid github account", async () => {
        const exists = await new Promise((resolve, reject) =>
            urlExists(githubUrl, (err, exists) => resolve(exists))
        );
        expect(exists).toBeTrue();
    });
    it("should point to a valid twitter account", async () => {
        const exists = await new Promise((resolve, reject) =>
            urlExists(twitterUrl, (err, exists) => resolve(exists))
        );
        expect(exists).toBeTrue();
    });
    it("should point to a valid website", async () => {
        const exists = await new Promise((resolve, reject) =>
            urlExists(websiteUrl, (err, exists) => resolve(exists))
        );
        expect(exists).toBeTrue();
    });
});
