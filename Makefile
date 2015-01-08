build:
	sjs -r -o app/js/smart_worker/smartworker.js app/js/smart_worker/smartworker.sjs

PROFILE_DIR=/tmp/maple_profile_dir
MAPLE_DIR=/mozilla/maple.old/
run: build
	rm -rf ${PROFILE_DIR} && mkdir ${PROFILE_DIR} && ${MAPLE_DIR}./mach run -profile ${PROFILE_DIR} http://gaiamobile.org/sms/app/index.html
