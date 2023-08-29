import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigInterface, DownloadModeEnum, TreeModel } from 'ng6-file-man';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import xhook from 'xhook';
import { environment } from '../../../../environments/environment';
import { TokenService } from '../../auth/services/token.service';

@Component({
  selector: 'images-table',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  url = environment.apiUrl;
  uploadedFiles: any[] = [];
  _albums: any[] = [];
  loadingList = false;
  isPopup = false;
  tree: TreeModel;
  appLanguage = 'en';
  constructor(
    private tokenService: TokenService,
    //private crudService: CrudService,
    public router: Router,
    // private sanitization: DomSanitizer,
    // private dialogService: NbDialogService,
    //private _lightbox: Lightbox,
    private mScrollbarService: MalihuScrollbarService
  ) {
    const treeConfig: ConfigInterface = {
      baseURL: this.url,
      api: {
        listFile: '/v1/private/content/list',
        uploadFile: '/v1/private/content/images/add',
        downloadFile: '/v1/content/images/download',
        deleteFile: '/v1/private/content/images/remove',
        createFolder: 'api/directory', //not supported
        renameFile: '/v1/private/content/images/rename',
        searchFiles: 'api/search', //not supported
      },
      options: {
        allowFolderDownload: DownloadModeEnum.DOWNLOAD_DISABLED,
        showFilesInsideTree: true,
      },
    };
    this.tree = new TreeModel(treeConfig);
  }

  ngOnInit() {
    console.log('ngOnInit');
    const token: string = this.tokenService.getToken();

    if (token) {
      xhook.before(function (request) {
        request.headers['Authorization'] = 'Bearer ' + token;
      });
    }
  }

  ngAfterViewInit() {
    this.mScrollbarService.initScrollbar('.gallery_listing_main', {
      axis: 'y',
      theme: 'minimal-dark',
      scrollButtons: { enable: true },
    });
  }
}
