import React, { useState } from 'react';
import { Button, Input, Select } from '@shadcn/ui';
import axios from 'axios';

const CadastroMembro = () => {
    const [form, setForm] = useState({
        nome_completo: '',
        sexo: '',
        data_nascimento: '',
        cep: '',
        endereço: '',
        // ... outros campos
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const buscarEndereco = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/cep/${form.cep}`);
            setForm({ ...form, endereço: response.data.endereço });
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
        }
    };

    return (
        <div>
            <Input name="nome_completo" value={form.nome_completo} onChange={handleChange} placeholder="Nome Completo" />
            <Select name="sexo" value={form.sexo} onChange={handleChange}>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
            </Select>
            <Input name="cep" value={form.cep} onChange={handleChange} onBlur={buscarEndereco} placeholder="CEP" />
            <Input name="endereço" value={form.endereço} onChange={handleChange} placeholder="Endereço" />
            <Button onClick={() => console.log(form)}>Salvar</Button>
        </div>
    );
};

export default CadastroMembro;