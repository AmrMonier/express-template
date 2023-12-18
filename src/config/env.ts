import Joi from "joi";
import dotenv from "dotenv";

dotenv.config();

const envSchema = Joi.object({
  PORT: Joi.number().default(3000),
  // Define other env variables here
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
interface IEnvVariables {
  PORT: number;
}
export const config: IEnvVariables = {
  PORT: envVars.PORT,
  // Export other env variables here
};
