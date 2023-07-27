import_code("/root/wrapper")

metaxploit = include_lib(current_path + "/metaxploit.so")
if not metaxploit then metaxploit = include_lib("/lib/metaxploit.so")
if not metaxploit then exit("metaxploit.so not found.")
api = getAPI(metaxploit)
if not api then exit("api not found.")
print(api.testConnection)