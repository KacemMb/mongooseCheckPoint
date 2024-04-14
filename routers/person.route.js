import express from 'express';
import { classicUpdate, create, createMany, deleteByAge, deletePerson, getPerson, getPersonById, updatePerson } from '../controllers/person.controller.js';

const router = express.Router();


router.post('/test',create);
router.get('/getPerson',getPerson);
router.get('/getPerson/:id',getPersonById);
router.patch('/updatePerson/:id',updatePerson);
router.delete('/deletePerson/:id',deletePerson);
router.delete('/deletePerson/:age',deleteByAge);
router.post('/createMany',createMany);
router.get('/classicUpdate',classicUpdate);



export default router;