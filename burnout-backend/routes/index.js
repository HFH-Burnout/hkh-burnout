import hat from '../controllers/hatController';

export default(app) => {
  app.route('/profile')
  .get(hat.getMyDetails)
  .post(hat.createProfile);
  app.route('/daily')
  .get()
  .post();
  app.route('/stable')
  .get()
  .post();
  app.route('/changing')
  .get()
  .post();
  app.route('/cbi')
  .get()
  .post();

}
