// Load the AWS SDK for JS
var AWS = require("aws-sdk");
AWS.config.update({region: "us-east-1"});

// Setup the translation client
var translate = new AWS.Translate();

var params = {
  SourceLanguageCode: 'auto',
  TargetLanguageCode: 'es',
  Text: 'Hello! My name is Fernando.'
};

translate.translateText(params, function (err, data) {
  if (err) console.log(err, err.stack); 
  else     console.log(data['TranslatedText']);
});