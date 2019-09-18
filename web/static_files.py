import os


CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))


def get_static_files():
    static_file_path = os.path.join(CURRENT_DIR, 'static')
    find_dir_list = ["css", "js"]
    resource = {}
    for dir_name in find_dir_list:
        file_names = os.listdir(os.path.join(static_file_path, dir_name))
        for file_name in file_names:
            if os.path.isdir(file_name):
                continue
            if file_name.startswith('app.') and file_name.endswith('.css'):
                resource['css'] = 'css/' + file_name
            if file_name.startswith('app.') and file_name.endswith('.js'):
                resource['app'] = 'js/' + file_name
            if file_name.startswith('manifest.') & file_name.endswith('.js'):
                resource['manifest'] = 'js/' + file_name
            if file_name.startswith('vendor.') & file_name.endswith('.js'):
                resource['vendor'] = 'js/' + file_name
    return resource

