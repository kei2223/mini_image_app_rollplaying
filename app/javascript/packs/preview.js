document.addEventListener('DOMContentLoaded', function () { 
    
    const messageForm = document.querySelector("#new_message");
  if (!messageForm) return null;
    const ImageList = document.getElementById('image-list')

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div') 
      imageElement.setAttribute('id', 'image-element')
      let imageElementNum = document.querySelectorAll('#image-element').length 
      
      // 表示する画像を生成
      const blobImage = document.createElement('img') 
      blobImage.setAttribute('src', blob)

      // ファイル選択ボタンを生成
      const inputHTML = document.createElement('inputs')
      inputHTML.setAttribute('id', `message_image_${imageElementNum}`)
      inputHTML.setAttribute('name', 'message[images][]')
      inputHTML.setAttribute('type','file')

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage) 
      imageElement.appendChild(inputHTML)
      ImageList.appendChild(imageElement)

      inputHTML.addEventListener('change', (e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);
        createImageHTML(blob)
      })
    }

    document.getElementById('message_image').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob)
    });
  });


