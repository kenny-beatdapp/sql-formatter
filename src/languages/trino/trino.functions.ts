import { flatKeywordList } from '../../utils';

export const functions = flatKeywordList({
  // https://github.com/trinodb/trino/tree/432d2897bdef99388c1a47188743a061c4ac1f34/docs/src/main/sphinx/functions
  // rg '^\.\. function::' ./docs/src/main/sphinx/functions | cut -d' ' -f 3 | cut -d '(' -f 1 | sort | uniq
  // rg '\* ' ./docs/src/main/sphinx/functions/list-by-topic.rst | grep    '\* :func:' | cut -d'`' -f 2
  // rg '\* ' ./docs/src/main/sphinx/functions/list-by-topic.rst | grep -v '\* :func:'
  // grep -e '^- ' ./docs/src/main/sphinx/functions/list.rst | grep  -e '^- :func:' | cut -d'`' -f2
  // grep -e '^- ' ./docs/src/main/sphinx/functions/list.rst | grep -ve '^- :func:'
  all: [
    'ABS',
    'ACOS',
    'ALL_MATCH',
    'ANY_MATCH',
    'APPROX_DISTINCT',
    'APPROX_MOST_FREQUENT',
    'APPROX_PERCENTILE',
    'APPROX_SET',
    'ARBITRARY',
    'ARRAYS_OVERLAP',
    'ARRAY_AGG',
    'ARRAY_DISTINCT',
    'ARRAY_EXCEPT',
    'ARRAY_INTERSECT',
    'ARRAY_JOIN',
    'ARRAY_MAX',
    'ARRAY_MIN',
    'ARRAY_POSITION',
    'ARRAY_REMOVE',
    'ARRAY_SORT',
    'ARRAY_UNION',
    'ASIN',
    'ATAN',
    'ATAN2',
    'AT_TIMEZONE',
    'AVG',
    'BAR',
    'BETA_CDF',
    'BING_TILE',
    'BING_TILES_AROUND',
    'BING_TILE_AT',
    'BING_TILE_COORDINATES',
    'BING_TILE_POLYGON',
    'BING_TILE_QUADKEY',
    'BING_TILE_ZOOM_LEVEL',
    'BITWISE_AND',
    'BITWISE_AND_AGG',
    'BITWISE_LEFT_SHIFT',
    'BITWISE_NOT',
    'BITWISE_OR',
    'BITWISE_OR_AGG',
    'BITWISE_RIGHT_SHIFT',
    'BITWISE_RIGHT_SHIFT_ARITHMETIC',
    'BITWISE_XOR',
    'BIT_COUNT',
    'BOOL_AND',
    'BOOL_OR',
    'CARDINALITY',
    'CAST',
    'CBRT',
    'CEIL',
    'CEILING',
    'CHAR2HEXINT',
    'CHECKSUM',
    'CHR',
    'CLASSIFY',
    'CLASSIFIER',
    'COALESCE',
    'CODEPOINT',
    'COLOR',
    'COMBINATIONS',
    'CONCAT',
    'CONCAT_WS',
    'CONTAINS',
    'CONTAINS_SEQUENCE',
    'CONVEX_HULL_AGG',
    'CORR',
    'COS',
    'COSH',
    'COSINE_SIMILARITY',
    'COUNT',
    'COUNT_IF',
    'COVAR_POP',
    'COVAR_SAMP',
    'CRC32',
    'CUME_DIST',
    'CURRENT_CATALOG',
    'CURRENT_DATE',
    'CURRENT_GROUPS',
    'CURRENT_SCHEMA',
    'CURRENT_TIME',
    'CURRENT_TIMESTAMP',
    'CURRENT_TIMEZONE',
    'CURRENT_USER',
    'DATE',
    'DATE_ADD',
    'DATE_DIFF',
    'DATE_FORMAT',
    'DATE_PARSE',
    'DATE_TRUNC',
    'DAY',
    'DAY_OF_MONTH',
    'DAY_OF_WEEK',
    'DAY_OF_YEAR',
    'DEGREES',
    'DENSE_RANK',
    'DOW',
    'DOY',
    'E',
    'ELEMENT_AT',
    'EMPTY_APPROX_SET',
    'EVALUATE_CLASSIFIER_PREDICTIONS',
    'EVERY',
    'EXP',
    'EXTRACT',
    'FEATURES',
    'FILTER',
    'FIRST',
    'FIRST_VALUE',
    'FLATTEN',
    'FLOOR',
    'FORMAT',
    'FORMAT_DATETIME',
    'FORMAT_NUMBER',
    'FROM_BASE',
    'FROM_BASE32',
    'FROM_BASE64',
    'FROM_BASE64URL',
    'FROM_BIG_ENDIAN_32',
    'FROM_BIG_ENDIAN_64',
    'FROM_ENCODED_POLYLINE',
    'FROM_GEOJSON_GEOMETRY',
    'FROM_HEX',
    'FROM_IEEE754_32',
    'FROM_IEEE754_64',
    'FROM_ISO8601_DATE',
    'FROM_ISO8601_TIMESTAMP',
    'FROM_ISO8601_TIMESTAMP_NANOS',
    'FROM_UNIXTIME',
    'FROM_UNIXTIME_NANOS',
    'FROM_UTF8',
    'GEOMETRIC_MEAN',
    'GEOMETRY_FROM_HADOOP_SHAPE',
    'GEOMETRY_INVALID_REASON',
    'GEOMETRY_NEAREST_POINTS',
    'GEOMETRY_TO_BING_TILES',
    'GEOMETRY_UNION',
    'GEOMETRY_UNION_AGG',
    'GREATEST',
    'GREAT_CIRCLE_DISTANCE',
    'HAMMING_DISTANCE',
    'HASH_COUNTS',
    'HISTOGRAM',
    'HMAC_MD5',
    'HMAC_SHA1',
    'HMAC_SHA256',
    'HMAC_SHA512',
    'HOUR',
    'HUMAN_READABLE_SECONDS',
    'IF',
    'INDEX',
    'INFINITY',
    'INTERSECTION_CARDINALITY',
    'INVERSE_BETA_CDF',
    'INVERSE_NORMAL_CDF',
    'IS_FINITE',
    'IS_INFINITE',
    'IS_JSON_SCALAR',
    'IS_NAN',
    'JACCARD_INDEX',
    'JSON_ARRAY_CONTAINS',
    'JSON_ARRAY_GET',
    'JSON_ARRAY_LENGTH',
    'JSON_EXISTS',
    'JSON_EXTRACT',
    'JSON_EXTRACT_SCALAR',
    'JSON_FORMAT',
    'JSON_PARSE',
    'JSON_QUERY',
    'JSON_SIZE',
    'JSON_VALUE',
    'KURTOSIS',
    'LAG',
    'LAST',
    'LAST_DAY_OF_MONTH',
    'LAST_VALUE',
    'LEAD',
    'LEARN_CLASSIFIER',
    'LEARN_LIBSVM_CLASSIFIER',
    'LEARN_LIBSVM_REGRESSOR',
    'LEARN_REGRESSOR',
    'LEAST',
    'LENGTH',
    'LEVENSHTEIN_DISTANCE',
    'LINE_INTERPOLATE_POINT',
    'LINE_INTERPOLATE_POINTS',
    'LINE_LOCATE_POINT',
    'LISTAGG',
    'LN',
    'LOCALTIME',
    'LOCALTIMESTAMP',
    'LOG',
    'LOG10',
    'LOG2',
    'LOWER',
    'LPAD',
    'LTRIM',
    'LUHN_CHECK',
    'MAKE_SET_DIGEST',
    'MAP',
    'MAP_AGG',
    'MAP_CONCAT',
    'MAP_ENTRIES',
    'MAP_FILTER',
    'MAP_FROM_ENTRIES',
    'MAP_KEYS',
    'MAP_UNION',
    'MAP_VALUES',
    'MAP_ZIP_WITH',
    'MATCH_NUMBER',
    'MAX',
    'MAX_BY',
    'MD5',
    'MERGE',
    'MERGE_SET_DIGEST',
    'MILLISECOND',
    'MIN',
    'MINUTE',
    'MIN_BY',
    'MOD',
    'MONTH',
    'MULTIMAP_AGG',
    'MULTIMAP_FROM_ENTRIES',
    'MURMUR3',
    'NAN',
    'NEXT',
    'NGRAMS',
    'NONE_MATCH',
    'NORMALIZE',
    'NORMAL_CDF',
    'NOW',
    'NTH_VALUE',
    'NTILE',
    'NULLIF',
    'NUMERIC_HISTOGRAM',
    'OBJECTID',
    'OBJECTID_TIMESTAMP',
    'PARSE_DATA_SIZE',
    'PARSE_DATETIME',
    'PARSE_DURATION',
    'PERCENT_RANK',
    'PERMUTE',
    'PI',
    'POSITION',
    'POW',
    'POWER',
    'PREV',
    'QDIGEST_AGG',
    'QUARTER',
    'RADIANS',
    'RAND',
    'RANDOM',
    'RANK',
    'REDUCE',
    'REDUCE_AGG',
    'REGEXP_COUNT',
    'REGEXP_EXTRACT',
    'REGEXP_EXTRACT_ALL',
    'REGEXP_LIKE',
    'REGEXP_POSITION',
    'REGEXP_REPLACE',
    'REGEXP_SPLIT',
    'REGRESS',
    'REGR_INTERCEPT',
    'REGR_SLOPE',
    'RENDER',
    'REPEAT',
    'REPLACE',
    'REVERSE',
    'RGB',
    'ROUND',
    'ROW_NUMBER',
    'RPAD',
    'RTRIM',
    'SECOND',
    'SEQUENCE',
    'SHA1',
    'SHA256',
    'SHA512',
    'SHUFFLE',
    'SIGN',
    'SIMPLIFY_GEOMETRY',
    'SIN',
    'SKEWNESS',
    'SLICE',
    'SOUNDEX',
    'SPATIAL_PARTITIONING',
    'SPATIAL_PARTITIONS',
    'SPLIT',
    'SPLIT_PART',
    'SPLIT_TO_MAP',
    'SPLIT_TO_MULTIMAP',
    'SPOOKY_HASH_V2_32',
    'SPOOKY_HASH_V2_64',
    'SQRT',
    'STARTS_WITH',
    'STDDEV',
    'STDDEV_POP',
    'STDDEV_SAMP',
    'STRPOS',
    'ST_AREA',
    'ST_ASBINARY',
    'ST_ASTEXT',
    'ST_BOUNDARY',
    'ST_BUFFER',
    'ST_CENTROID',
    'ST_CONTAINS',
    'ST_CONVEXHULL',
    'ST_COORDDIM',
    'ST_CROSSES',
    'ST_DIFFERENCE',
    'ST_DIMENSION',
    'ST_DISJOINT',
    'ST_DISTANCE',
    'ST_ENDPOINT',
    'ST_ENVELOPE',
    'ST_ENVELOPEASPTS',
    'ST_EQUALS',
    'ST_EXTERIORRING',
    'ST_GEOMETRIES',
    'ST_GEOMETRYFROMTEXT',
    'ST_GEOMETRYN',
    'ST_GEOMETRYTYPE',
    'ST_GEOMFROMBINARY',
    'ST_INTERIORRINGN',
    'ST_INTERIORRINGS',
    'ST_INTERSECTION',
    'ST_INTERSECTS',
    'ST_ISCLOSED',
    'ST_ISEMPTY',
    'ST_ISRING',
    'ST_ISSIMPLE',
    'ST_ISVALID',
    'ST_LENGTH',
    'ST_LINEFROMTEXT',
    'ST_LINESTRING',
    'ST_MULTIPOINT',
    'ST_NUMGEOMETRIES',
    'ST_NUMINTERIORRING',
    'ST_NUMPOINTS',
    'ST_OVERLAPS',
    'ST_POINT',
    'ST_POINTN',
    'ST_POINTS',
    'ST_POLYGON',
    'ST_RELATE',
    'ST_STARTPOINT',
    'ST_SYMDIFFERENCE',
    'ST_TOUCHES',
    'ST_UNION',
    'ST_WITHIN',
    'ST_X',
    'ST_XMAX',
    'ST_XMIN',
    'ST_Y',
    'ST_YMAX',
    'ST_YMIN',
    'SUBSTR',
    'SUBSTRING',
    'SUM',
    'TAN',
    'TANH',
    'TDIGEST_AGG',
    'TIMESTAMP_OBJECTID',
    'TIMEZONE_HOUR',
    'TIMEZONE_MINUTE',
    'TO_BASE',
    'TO_BASE32',
    'TO_BASE64',
    'TO_BASE64URL',
    'TO_BIG_ENDIAN_32',
    'TO_BIG_ENDIAN_64',
    'TO_CHAR',
    'TO_DATE',
    'TO_ENCODED_POLYLINE',
    'TO_GEOJSON_GEOMETRY',
    'TO_GEOMETRY',
    'TO_HEX',
    'TO_IEEE754_32',
    'TO_IEEE754_64',
    'TO_ISO8601',
    'TO_MILLISECONDS',
    'TO_SPHERICAL_GEOGRAPHY',
    'TO_TIMESTAMP',
    'TO_UNIXTIME',
    'TO_UTF8',
    'TRANSFORM',
    'TRANSFORM_KEYS',
    'TRANSFORM_VALUES',
    'TRANSLATE',
    'TRIM',
    'TRIM_ARRAY',
    'TRUNCATE',
    'TRY',
    'TRY_CAST',
    'TYPEOF',
    'UPPER',
    'URL_DECODE',
    'URL_ENCODE',
    'URL_EXTRACT_FRAGMENT',
    'URL_EXTRACT_HOST',
    'URL_EXTRACT_PARAMETER',
    'URL_EXTRACT_PATH',
    'URL_EXTRACT_PORT',
    'URL_EXTRACT_PROTOCOL',
    'URL_EXTRACT_QUERY',
    'UUID',
    'VALUES_AT_QUANTILES',
    'VALUE_AT_QUANTILE',
    'VARIANCE',
    'VAR_POP',
    'VAR_SAMP',
    'VERSION',
    'WEEK',
    'WEEK_OF_YEAR',
    'WIDTH_BUCKET',
    'WILSON_INTERVAL_LOWER',
    'WILSON_INTERVAL_UPPER',
    'WITH_TIMEZONE',
    'WORD_STEM',
    'XXHASH64',
    'YEAR',
    'YEAR_OF_WEEK',
    'YOW',
    'ZIP',
    'ZIP_WITH',
  ],
});
