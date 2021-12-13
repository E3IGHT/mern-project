import express from 'express'
import cors from 'cors'
import path from 'path'
import { MongoClient, ObjectId } from 'mongodb'

const app = express();
app.use(cors());
app.use(express.json());


const connectx = await MongoClient.connect('mongodb+srv://devmonk:d3v@cluster.ru31h.mongodb.net');
const dbSessions = await connectx.db('ingressos').collection('sessoes');


