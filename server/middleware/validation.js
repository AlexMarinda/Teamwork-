import Joi from '@hapi/joi';


 // all validation operation 
 export class Validation {
 // article attributes validator
 static createArticleValidator(req, res, next) {
  const schema = Joi.object().keys({
      title: Joi.string()
      .trim()
      .min(2)
      .max(50)
      .required(),
      article: Joi.string()
      .trim()
      .min(10)
      .max(500)
      .required(),    
  });

  checkValidator(req, res, schema, next);
}

  // user attributes validator

  static userValidator(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
      first_name: Joi.string()
        .strict()
        .trim()
        .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
        .min(2)
        .max(30)
        .required(),
      last_name: Joi.string()
        .alphanum()
        .strict()
        .trim()
        .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
        .min(2)
        .max(30)
        .required(),
        gender: Joi.string()
        .alphanum()
        .strict()
        .trim()
        .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
        .min(4)
        .max(6)
        .required(),
        jobRole: Joi.string()
        .alphanum()
        .strict()
        .trim()
        .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
        .min(2)
        .required(),
        jobRole: Joi.string()
        .alphanum()
        .strict()
        .trim()
        .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
        .min(2)
        .required(),
      password: Joi.string()
        .min(7)
        .max(50)
        .required(),
      department: Joi.string()
        .alphanum()
        .strict()
        .trim()
        .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
        .min(2)
        .required(),
      address: Joi.string()
        .alphanum()
        .strict()
        .trim()
        .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
        .min(2)
        .required(),

    });
    checkValidator(req, res, schema, next);



  }



}

export const checkValidator = (req, res, schema, next) => {
  const { error } = Joi.validate(req.body, schema, {abortEarly: false,convert: true });
  if (error) {
    const errors = [];
    const { details: errArr = [] } = error || {};
    errArr.forEach(err => {
      errors.push(err.message.split('"').join(''));
    });
    
    return res.status(400).send({ status: 400, 'message':errors}); 
 
  }
  return next();

};



