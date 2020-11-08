// @ts-check

// see: https://caniuse.com/#feat=es6-class
class EditOnGitHub {
  constructor() {}
  /**
   *
   * @param {string} repository
   * @param {string} branch
   * @param {string} basePath
   */
  create(repository, branch, basePath) {
    this.repository = repository;
    this.branch = branch;
    this.basePath = basePath;

    return (hook, vm) => {
      this.vm = vm;

      hook.afterEach(
        /** @param {string} html */ (html) => {
          return `
        ${html}
        
        <div style="margin-top: 50px">
          <a style="cursor: pointer" onclick="window.EditOnGitHub.onClick(event)">
            📝 GitHub でドキュメントを編集する
          </a>
        </div>
        
        `.trim();
        }
      );
    };
  }

  /**
   *
   * @param {Event} event
   */
  onClick(event) {
    const baseUrl = `https://github.com/${this.repository}/edit/${this.branch}/${this.basePath}`;
    const file = this.vm.route.file;

    event.preventDefault();
    window.open(`${baseUrl}${file}`);

    return true;
  }
}

const AppendFooter = (hook) => {
  hook.afterEach(
    /** @param {string} html */ (html) => {
      return `
${html}

<br />
<footer style="border-top: 1px solid #ccc; padding-top: 10px; color: #999; font-size: 90%;">
  &copy; ${new Date().getFullYear()} Natsuneko. Rendered by <a href='https://docsify.js.org' target='_blank'>Docsify</a>.
</footer>
`.trim();
    }
  );
};

class BeautifulTitle {
  create (title = null) {
    return (hook) => {
      hook.doneEach(() => {
        if (title)
          document.title = `${document.title} - ${title} | docs.mochizuki.moe`;
        else
          document.title = `${document.title} | docs.mochizuki.moe`;
      });
    }
  }
}

window.AppendFooter = AppendFooter;
window.BeautifulTitle = new BeautifulTitle();
window.EditOnGitHub = new EditOnGitHub();
