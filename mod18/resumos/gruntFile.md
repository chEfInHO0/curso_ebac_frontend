# LESS

```
less:{
    ambiente:{
        options:{},
        files:{}
    }
}
```
# ambiente : *development* ou *production*
# options: Objeto {}
- ## compress: **boolean** :  comprime o arquivo removendo as quebras de linha e espaços
- ### Pode receber os valores *true* ou *false*, se nenhuma config for passada o valor padrao: *false**
- - ### Para remover os espaços e quebras de linha vamos usar o *{compress: true}*
## files : Objeto: 'destino' : 'origem'
- ### *'onde_o_arquivo_vai_ficar/nome_do_arquivo.css'* : *'local_onde_o_arquivo_less_sera_compilado/arquivo.less'* **ambas as chaves sao caminhos de pastas**

---

# SASS

```
sass:{
    ambiente:{
        options:{},
        files:{}
    }
}

```
# options: Objeto {}
- ## style: 'string' :  altera a forma que o arquivo final vai ser gerado.  
- ### Pode receber os valores *'nested', 'compact', 'compressed', 'expanded'*, se nenhuma config for passada o valor padrao: *'nested'**
- - ### Para remover os espaços e quebras de linha vamos usar o *{style:'compressed'}*
## files: Objeto {}
- ### *'onde_o_arquivo_vai_ficar/nome_do_arquivo.css'* : *'local_onde_o_arquivo_sass_sera_compilado/arquivo.scss'*

---

# CONCURRENT

```
concurrent: { 
    target: [array de funcoes que serao executadas de forma assincrona] 
}
```
## target: Array []
- ### Array de funcoes que sera executadas de forma assincrona
---

# WATCH

```
watch:{
    nomeDaTask: {
                files: ['arquivos que vao ser observados'],
                tasks: ['funcao a ser executada ao alterar os arquivos observados']
            },
}
```
## files: Array []
- ### Pasta com os arquivos que vao ser observados
## tasks: Array []
- ### Comando que sera executado toda vez que os arquivos observados forem alterados
---

# REPLACE

```

replace: {
            ambiente: {
                options: {
                    patterns: [{
                        match: '',
                        replacement: ''
                    },
                    {
                        match: '',
                        replacement: ''
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: [''],
                    dest: ''
                }]
            },

```

## ambiente: Objeto {}
- ### dev ou dist
## options: Objeto {}
- ### patterns : Array que recebe um objeto [{}] :
- - ### match : 'string': **recebe a string que sera localizada dentro do arquivo html para substituir pela string armazenada em *replacement***
- - ### replacement : 'string': **recebe um caminho ate um arquivo especifico (css,js,etc) que sera colocado dentro do arquivo html**
## files : Array que recebe um objeto [{}] :
- ### expand : **boolean** : 
- ### flatten : **boolean** : 
- ### src : Array [] : array com a string do local onde se encontra o arquivo html que possui o match e que ira ser substituido
- ### dest : 'string' : string com o local para onde ira ser mandado o arquivo html apos o replace do match no arquivo

---


# HTMLMIN

```
ambiente: {
    options: {
        removeComments: true,
        collpaseWhitespace: true
    },
    files: {
        'destino': 'origem'
    }
}
```
## ambiente: Objeto {}
- ### dev ou dist
## options: Objeto {}
- ### removeComments : **boolean** : remove os comentarios do codigo html durante a minificacao
- ### collpaseWhitespace : **boolean** : remove os espacos em branco e quebras de linha durante a minificacao 
## files : Objeto {}: 'destino' : 'origem'
- ### *'a chave destino e para onde vai o arquivo HTML depois de ser minificado'* : *'a chave de origem e onde esta o arquivo HTML que sera minificado'* **ambas as chaves sao caminhos de pastas**


---
# CLEAN

```
clean: ['pasta que sera excluida apos a execucao da tarefa clean'],
```

### clean : Array [] : ['./pasta/queVamos/apagar']
---
# UGLIFY

```
uglify:{
    target:{
        files:{
            'destino':'origem'
        }
    }
}
```
## target : Objeto {}
- ### files : Objeto: 'destino' : 'origem'
- ### *'a chave destino e para onde vai o arquivo JS depois de ser minificado'* : *'a chave de origem e onde esta o arquivo JS que sera minificado'* **ambas as chaves sao caminhos de pastas**
---