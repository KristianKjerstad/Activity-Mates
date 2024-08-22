docker run --rm  -v "${PWD}:/local" openapitools/openapi-generator-cli generate  \
    -i http://host.docker.internal:8000/api/openapi.json \
    -g typescript-axios \
    -o /local/api/generated
