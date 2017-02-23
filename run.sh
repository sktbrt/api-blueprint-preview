#!/bin/sh -eux

docker run -it -p 8000:8000 --rm blueprint-preview
#docker run -it -v api-docs-path:/workspace/docs -p 8000:8000 --rm blueprint-preview