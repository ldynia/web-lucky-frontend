#!/bin/sh

# Define vars
NC='\033[0m'
RED='\033[0;31m'
BLUE='\e[36m'
YELLOW='\033[0;33m'
EXIT_CODE=0

# Check if unit tests failed!
RESPONSE_STATUS_CODE=$(curl -s -o /dev/null -I -w "%{http_code}" localhost)
if [ "$RESPONSE_STATUS_CODE" != "200" ]; then
    printf "${RED}ERROR:${NC} ${YELLOW}Invalid status code $RESPONSE_STATUS_CODE $TEST_RESULT${NC}\n"
    EXIT_CODE=1
fi

exit $EXIT_CODE