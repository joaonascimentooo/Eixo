# Minha Rotina - Site de Gerenciamento de Tarefas

Um aplicativo web moderno para gerenciar sua rotina diária, desenvolvido com Next.js 16, TypeScript, React e Tailwind CSS.

## 🚀 Características

- ✅ Adicionar, editar e remover tarefas
- 📅 Navegação entre datas
- ⏰ Definir horário e duração para cada tarefa
- 🏷️ Categorizar tarefas (Trabalho, Pessoal, Saúde, Diversão, Estudo)
- 📊 Visualizar progresso do dia
- 🎨 Interface moderna e responsiva
- 💾 Estado gerenciado com Zustand

## 📦 Dependências Instaladas

### Produção
- `next` - Framework React server-side rendering
- `react` - Biblioteca UI
- `react-dom` - Renderização React no DOM
- `zustand` - Gerenciamento de estado leve
- `lucide-react` - Ícones modernos
- `date-fns` - Manipulação de datas
- `axios` - Cliente HTTP
- `@radix-ui/*` - Componentes acessíveis

### Desenvolvimento
- `typescript` - Tipagem estática
- `tailwindcss` - Framework CSS utilitário
- `eslint` - Linter JavaScript
- Utilitários e componentes UI

## 🛠️ Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página principal
│   └── api/               # Rotas API (futuro)
├── components/
│   ├── TaskCard.tsx       # Componente de tarefa individual
│   └── TaskList.tsx       # Lista de tarefas
├── store/
│   └── routineStore.ts    # Gerenciamento de estado com Zustand
├── types/
│   └── routine.ts         # Tipos TypeScript
├── lib/
│   └── utils.ts           # Funções utilitárias
└── globals.css            # Estilos globais
```

## 🚀 Como Começar

### Desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção
```bash
npm run build
npm start
```

## 📝 Como Usar

1. **Adicionar Tarefa**: Clique em "Nova Tarefa"
2. **Preencher Formulário**:
   - Título da tarefa (obrigatório)
   - Descrição (opcional)
   - Horário
   - Duração em minutos
   - Categoria
3. **Navegar Datas**: Use os botões < e > ou clique "Hoje"
4. **Marcar Concluída**: Clique no checkbox
5. **Deletar**: Clique no ícone de lixeira

## 🔮 Próximas Funcionalidades

- [ ] Persistência com localStorage ou banco de dados
- [ ] Sistema de autenticação
- [ ] Sincronização em nuvem
- [ ] Notificações de tarefas
- [ ] Gráficos de produtividade
- [ ] Modo escuro
- [ ] Tarefas recorrentes

---

**Criado para melhorar sua produtividade**
