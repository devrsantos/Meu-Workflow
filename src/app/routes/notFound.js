module.exports = application => {
  application.get('/notFound', (req, res) => {
    res.render('notFound');
  });
};
