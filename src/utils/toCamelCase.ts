import _ from "lodash";

const toCamelCase = (data: unknown): any => {
    if (_.isArray(data)) {
        return _.map(data, toCamelCase);
    }

    if (_.isObject(data)) {
        return _(data)
            .mapKeys((v, k) => _.camelCase(k))
            .mapValues((v, k) => toCamelCase(v))
            .value();
    }

    return data;
};

export default toCamelCase;
