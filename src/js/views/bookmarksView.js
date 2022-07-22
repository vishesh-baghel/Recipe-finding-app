import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class bookMarksView extends View {
  _errorMessage = `No bookmarks yet`;
  _message = '';
  _parentElement = document.querySelector('.bookmarks__list');

  addhandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }

  _generateMarkupPreview(result) {
    return `<li class="preview">
    <a class="preview__link preview__link--active" href="${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`;
  }
}

export default new bookMarksView();
